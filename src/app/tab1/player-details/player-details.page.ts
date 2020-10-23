import { PlayerService } from 'src/app/services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  userList;
  constructor(public playerServ: PlayerService) { }

  ngOnInit() {
    this.userList = this.playerServ.currentUser;
    console.log(this.userList);
  }

}
