import { environment } from './../../environments/environment';
import { Users } from './../player.model';
import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {


  players: any;


  constructor(
   private playerServ: PlayerService,
  ) {}

  getFirebase() {
    firebase.initializeApp(environment.firebaseConfig);
  }


  getListPlayers(): void {
    this.playerServ.getAllPlayers().subscribe(datas => {
      // console.log(datas);
      return this.players = datas;
    }, err => console.log(err));


  }

}
