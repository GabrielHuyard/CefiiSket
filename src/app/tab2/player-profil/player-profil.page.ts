import { Users } from './../../services/player.model';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-profil',
  templateUrl: './player-profil.page.html',
  styleUrls: ['./player-profil.page.scss'],
})
export class PlayerProfilPage implements OnInit {
  player: Users;
  mp = false;
  constructor(private playerServ: PlayerService) {
    this.player = this.playerServ.currentUser;
  }

  ngOnInit() {
  }

  deleteAccount()
  {
    if (confirm('Souhaitez-vous vraiment supprimer ce compte ?')) {
      this.playerServ.deleteAPlayer(this.player.id);
    }
  }

  showPassword(bool){
    if (bool === 'true') {
      this.mp = true;
    } else {
      this.mp = false;
    }
  }
}
