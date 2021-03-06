import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Console } from '../../models/console';
import { Section } from '../../models/section';
import { Ad } from '../../models/ad';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  title = '';
  counter = '';
  sectionsCounter: { [key: string]: string; } = {};
  console = '';
  sections = Section.Sections;
  ads: Ad[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adService: AdService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.console = params['console'];
      this.title = Console.Consoles[this.console];
      if (this.title === undefined) {
        // console not valid
        this.router.navigate(['/games']);
      }
      this.adService.getAds(this.console).then((ads) => {
        this.ads = ads;
        this.counter = this.ads.length + '';
        this.keys(this.sections).forEach(element => {
          this.sectionsCounter[element] = this.getCountFiteringSection(element);
        });
      });
   });
  }

  getCountFiteringSection(section: string): string {
    return this.ads.filter(ad => ad.section === section).length + '';
  }

  keys(dictionary): Array<string> {
    return Object.keys(dictionary);
  }
}
