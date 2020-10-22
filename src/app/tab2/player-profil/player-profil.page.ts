import { PlayerServicesService } from './../../services/player-services.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'app-player-profil',
  templateUrl: './player-profil.page.html',
  styleUrls: ['./player-profil.page.scss'],
})
export class PlayerProfilPage implements OnInit {
  player: User;
  constructor(private playerServ: PlayerServicesService) {
    this.player = this.playerServ.currentUser;
  }

  ngOnInit() {
  }

  deleteAccount()
  {
    if (confirm('Souhaitez-vous vraiment supprimer ce compte ?')) {
      this.playerServ
    }
  }

}
