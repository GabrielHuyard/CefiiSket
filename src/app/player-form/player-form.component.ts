import { Users } from './../models/player.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent {



  constructor(

  ) { }

  @Input() btn: string;
  @Input() player: Users;

  onSubmit(val) {
    console.log(val);
  }
}
