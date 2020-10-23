import { PlayerService } from 'src/app/services/player.service';
import { Users } from './../models/player.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent {



  constructor(
private playerServ: PlayerService
  ) { }

  @Input() btn: string;
  @Input() player: Users;
  @Input() mp;

  onSubmit() {
    this.playerServ.updatePlayer(this.player);
  }
}
