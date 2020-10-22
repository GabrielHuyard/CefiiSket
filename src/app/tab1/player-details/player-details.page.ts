import { PlayerService } from './../../services/player-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  userList:any;
  constructor(public playerServ: PlayerService) { }

  ngOnInit() {
    this.userList = this.playerServ.userSelect;
    console.log(this.userList);
  }

}
