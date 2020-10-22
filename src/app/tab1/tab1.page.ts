import { NavController } from '@ionic/angular';
import { PlayerService } from './../services/player-services.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  listeUser=[];
  constructor( public playerServ: PlayerService, private navCtrl: NavController) {}
  ngOnInit(){
   this.playerServ.getAllUsers().subscribe(datas => {
    const DATALIST = datas;
    for (const User of DATALIST) {
      if (User.status !== true) {
        this.listeUser.push(User);
      }
    }
  }, err => console.log(err));
  }

  onclick(user:User){
    this.playerServ.userSelect = user;
    this.navCtrl.navigateBack('/tabs/tab1/player-details');
  }
}
