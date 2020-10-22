import { AuthServiceService } from './../../services/auth-service.service';
import { PlayerService } from '../../services/player.service';
import { Users } from './../../player.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.page.html',
  styleUrls: ['./player-add.page.scss'],
})
export class PlayerAddPage implements OnInit {

  @Input() users: Users;

  constructor(
    private playerServ: PlayerService,
    private router: Router,
    private authServ: AuthServiceService
  ) { }

  newPlayer: Users = {
    Nom : '',
    Prenom : '',
    Mail : '',
    Phone : '',
  };


  ngOnInit() {
  }

  onSubmit(newPlayerNom: string, newPlayerPrenom: string, newPlayerMail: string, newPlayerPhone: string, newPlayerPassword: string): void {
    if (newPlayerNom.trim() === '') { return; }
    this.newPlayer.Nom = newPlayerNom.trim();
    this.newPlayer.Prenom = newPlayerPrenom.trim();
    this.newPlayer.Mail = newPlayerMail.trim();
    this.newPlayer.Phone = newPlayerPhone.trim();
    this.newPlayer.Password = newPlayerPassword.trim();
    this.playerServ.addPlayer(this.newPlayer).then(disc => {
      this.authServ.createNewUser(this.newPlayer.Mail, this.newPlayer.Password);
      this.router.navigate(['/tabs/tab1/admin-listplayer']);
    });

  }



}
