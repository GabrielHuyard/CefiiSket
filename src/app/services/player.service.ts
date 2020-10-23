import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Users } from '../models/player.model';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  playerCollRef: AngularFirestoreCollection<Users>;
  playerDoc: AngularFirestoreDocument<Users>;
  currentUser: Users = {
    Nom: 'test',
    Prenom: 'test',
    Mail: 'test@test.fr',
    Phone: '0316464661',
    Password: 'u'
  };

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.playerCollRef = this.afs.collection<Users>('Users');
  }


  getAllPlayers(): Observable<Users[]> {
    // console.log('test');
    // console.log(this.playerCollRef);

    return this.playerCollRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        // console.log(a);

        const DATAS = a.payload.doc.data() as Users;
        // console.log(DATAS);


        const id = a.payload.doc.id;
        // console.log(id);

        return { id, ...DATAS };
      }))
    );
  }


  addPlayer(player: Users): Promise<any> {
    return this.playerCollRef.add(player);
  }

  deleteAPlayer(id: string): Promise<any> {
    return this.playerCollRef.doc(id).delete();
  }

  deletePlayerStorage(id: string): Observable<any> {
    return this.storage.ref(id).delete();
  }



  getPlayer(id: string): Observable<Users> {
    this.playerDoc = this.afs.doc<Users>('users/' + id);
    return this.playerDoc.valueChanges();
  }



  updatePlayer(player: Users): Promise<any> {
    return this.playerCollRef.doc(player.id).update({
      Nom: player.Nom,
      Prenom: player.Prenom,
      Mail: player.Mail,
      Phone: player.Phone,
    });
  }





}
