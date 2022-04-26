import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import IUser from '../models/user.model';
import { delay, map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.usersCollection = db.collection('users');
    this.isAuthenticated$ = auth.user.pipe(map((user) => !!user));
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1000));
    this.route.data.subscribe(console.log);
  }
  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password is Empty');
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!userCred.user) {
      throw new Error('User Cannot be found');
    }

    await this.usersCollection.doc(userCred.user.uid).set({
      name: userData.name,
      age: userData.age,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    });

    await userCred.user.updateProfile({
      displayName: userData.name,
    });
  }
  public async logout($event: Event) {
    if ($event) {
      $event.preventDefault();
    }
    await this.afAuth.signOut();
    await this.router.navigateByUrl('/');
  }
}
