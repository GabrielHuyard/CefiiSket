import { Match } from './../models/match.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchCollRef: AngularFirestoreCollection<Match>;
  matchDoc: AngularFirestoreDocument<Match>;

  constructor(
    private firestore: AngularFirestore,
  ) {
    this.matchCollRef = this.firestore.collection<Match>('Matchs');
  }

  getMatches(): Observable<Match[]> {
    return this.matchCollRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const DATAS = a.payload.doc.data() as Match;
        const id = a.payload.doc.id;
        return { id, ...DATAS };
      }))
    );
  }

  getMatch(id: string): Observable<Match> {
    this.matchDoc = this.firestore.doc<Match>('matchs/' + id);
    return this.matchDoc.valueChanges();
  }

  addMatch(m: Match) {
    return this.matchCollRef.add(m);
  }

  deleteMatch(id: string): Promise<any> {
    return this.matchCollRef.doc(id).delete();
  }

  editMatch(match: Match): Promise<any> {
    return this.matchCollRef.doc(match.id).update({
      city: match.city,
      title: match.title,
      startTime: match.startTime,
      endTime: match.endTime,
      location: match.location,
      players: match.players,
      opponent: match.opponent
  });
  }
}
