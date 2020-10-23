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
  @Input() name: string;
  @Input() mail: string;
  @Input() tel: string;
  @Input() mp: boolean;

  onSubmit(val) {
    console.log(val);
  }
}
