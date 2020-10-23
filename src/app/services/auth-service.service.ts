import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Users } from './player.model';
import {map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLog = false;
  redirectUrl: string;
  userCollRef: AngularFirestoreCollection<any>;
  redirect: boolean;
  status: boolean;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
                this.userCollRef = this.afs.collection<any>('Users');
              }
  getRedirect(){
    return this.redirect;
  }
  setRedirect(redirect: boolean){
    this.redirect = redirect;
  }
  getAllUsers(): Observable<Users[]>{
    return this.userCollRef.snapshotChanges().pipe(
      map(
        actions => actions.map( a => {
          const DATAS = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...DATAS};
        })
      ));

              }
  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logoutUser(): Promise<void> {
    this.setRedirect(false);
    return firebase.auth().signOut();
  }

  createNewUser(email: string, pw: string): Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email, pw);
  }
}
