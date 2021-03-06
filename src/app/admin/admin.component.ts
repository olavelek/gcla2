import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TogglenavService } from '../services/togglenav.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  togglenavSubscription: Subscription;
  @ViewChild('navpanel') navpanel: ElementRef;
  navMode = 'side';
  initOpened = true;
  // Accounts Name
  accountName = '';

  constructor(
    private authService: AuthService,
    private rd: Renderer,
    private router: Router,
    private togglenavService: TogglenavService) {
      this.togglenavSubscription = this.togglenavService.togglerNav$.subscribe(() => {
        this.rd.invokeElementMethod(this.navpanel, 'toggle');
      });
   }

  ngOnInit() {
    this.accountName = this.authService.user.name != null && this.authService.user.name !== '' ? this.authService.user.name : 'Account' ;
    if (window.innerWidth <= 500) {
      this.togglenavService.showNavToggleBtn = true;
      this.initOpened = false;
      this.navMode = 'push';
    }
  }

  ngOnDestroy() {
    this.togglenavSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth && event.target.innerWidth > 500) {
      this.rd.invokeElementMethod(this.navpanel, 'open');
      this.navMode = 'side';
    }else {
      this.rd.invokeElementMethod(this.navpanel, 'close');
      this.navMode = 'push';
    }
  }

  onMenuSelected() {
    if (window.innerWidth <= 500) {
      this.rd.invokeElementMethod(this.navpanel, 'close');
    }
  }
}
