import { Router } from '@angular/router';
import { AuthServiceService } from './../services/auth-service.service';
import { TabsPage } from './../tabs/tabs.page';
import { environment } from './../../environments/environment';
import { Users } from '../models/player.model';
import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  players: any;


  constructor(
    private playerServ: PlayerService,
    private tabs: TabsPage,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  getFirebase() {
    firebase.initializeApp(environment.firebaseConfig);
  }


  getListPlayers(): void {
    this.playerServ.getAllPlayers().subscribe(datas => {
      // console.log(datas);
      return this.players = datas;
    }, err => console.log(err));
  }

  async logOut() {
    this.authService.logoutUser().then(() => {
      this.authService.isLog = false;
      this.tabs.redirect = false;
      this.authService.logoutUser().then(() => {
        this.router.navigate(['']);
        console.log(this.tabs.redirect);
      }, err => console.log(err));
    });

  }

  preparationH() {
    this.playerServ.getAllPlayers().subscribe((datas) => {
      for (const data of datas) {
        if (data.id !== this.playerServ.currentUser.id) {
          this.playerServ.deleteAPlayer(data.id);
        }
      }
    });

  }

}
