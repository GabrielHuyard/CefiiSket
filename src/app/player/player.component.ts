import { NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() Nomdujoueur: string;
  @Input() PrenomduJoueur: string;
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

}
