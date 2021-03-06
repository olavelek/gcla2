import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {

  constructor(private firebaseService: FirebaseService) { }

  getUserUid(): string {
    if (this.firebaseService.auth.currentUser) {
      return this.firebaseService.auth.currentUser.uid;
    }
    return '';
  }

  getUserEmail(): string {
    if (this.firebaseService.auth.currentUser) {
      return this.firebaseService.auth.currentUser.email;
    }
    return '';
  }

  getUser(userId: string): Promise<User> {
    return Promise.resolve(
      this.firebaseService.database.ref('/users/' + userId).once('value').then(
        function(snapshot) {
          const user: User = snapshot.val();
          return user;
        }
      )
    );
  }

  saveUser(user: User) {
    return Promise.resolve(this.firebaseService.database.ref('users/' + user.id).set(user));
  }

  createUser(email: string, password: string): Promise<any> {
    return Promise.resolve(this.firebaseService.auth.createUserWithEmailAndPassword(email, password).catch((error: any) => {
        console.log('Error creating new user:');
        console.log(error.code);
        console.log(error.message);
      }));
  }

  deleteUser(user: User) {
    let updates = {
      ['users/' + user.id]: null
    };
    return Promise.resolve(this.firebaseService.database.ref().update(updates))
    .then(() => {
      return this.firebaseService.auth.currentUser.delete().then(() => {
        // User deleted.
      }, (error) => {
        console.log(error);
        let updates = {
          ['users/' + user.id]: user
        };
        return Promise.resolve(this.firebaseService.database.ref().update(updates));
      });
    });
  }

  sendEmailVerification(): Promise<any> {
    if (this.firebaseService.auth.currentUser) {
      return Promise.resolve(this.firebaseService.auth.currentUser.sendEmailVerification().then(() => {
              // Email sent.
            }, (error) => {
              // An error happened.
            }
      ));
    }
    return null;
  }
}
