import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './player.model';
import { AnyARecord } from 'dns';
@Injectable({
  providedIn: 'root'
})
export class PlayerService{
  playerCollRef: AngularFirestoreCollection<Users>;
  playerDoc: AngularFirestoreDocument<Users>;
  ListUser: Array<Users>;

  userSelect: any;

  constructor(
    private afs: AngularFirestore
    ) {
      this.playerCollRef = this.afs.collection<Users>('Users');
  }

  getAllUsers(): Observable<Users[]> {
    return this.playerCollRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const DATAS = a.payload.doc.data() as Users;
        const id = a.payload.doc.id;
        return { id, ...DATAS };
      }))
    );
  }

  selectJoueur(user){
    this.userSelect = user;
    console.log(this.userSelect);
  }
}