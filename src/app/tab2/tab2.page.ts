import { Users } from './../services/player.model';
import { PlayerService } from './../services/player.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private playerServ: PlayerService) {
  }

}
