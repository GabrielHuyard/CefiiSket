import { PlayerServicesService } from './../services/player-services.service';
import { Component } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  player: User;
  constructor(private playerServ: PlayerServicesService) {
    this.player = this.playerServ.currentUser;
  }

}
