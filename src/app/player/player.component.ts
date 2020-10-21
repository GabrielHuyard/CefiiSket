import { PlayerService } from './../services/player-services.service';
import { NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() Nomdujoueur:String;

  constructor(
    private navCtrl: NavController,
    private playerServ: PlayerService
  ) { }

  ngOnInit() {}

  onClick(){
    this.navCtrl.navigateBack('/tabs/tab1/player-details');
    
  }
}
