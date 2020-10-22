import { Users } from './player.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService{
  playerCollRef: AngularFirestoreCollection<Users>;
  playerDoc: AngularFirestoreDocument<Users>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
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
}
