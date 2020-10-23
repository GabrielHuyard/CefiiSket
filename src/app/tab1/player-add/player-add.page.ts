import { AuthServiceService } from './../../services/auth-service.service';
import { PlayerService } from '../../services/player.service';
import { Users } from '../../models/player.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.page.html',
  styleUrls: ['./player-add.page.scss'],
})
export class PlayerAddPage implements OnInit {

  @Input() users: Users;
  errorMessage: string;
  constructor(
    private playerServ: PlayerService,
    private router: Router,
    private authServ: AuthServiceService
  ) { }

  newPlayer: Users = {
    Nom: '',
    Prenom: '',
    Mail: '',
    Phone: '',
  };


  ngOnInit() {
  }

  onSubmit(form): void {
    console.log(form.value);
    if (form.value.nom.trim() === '' || form.value.prenom.trim() === '' || form.value.password.trim() === '') {
      this.errorMessage = 'Erreur';
    }
    this.playerServ.addPlayer(this.newPlayer).then(() => {
      this.authServ.createNewUser(this.newPlayer.Mail, this.newPlayer.Password);
      this.router.navigate(['/tabs/tab1/admin-listplayer']);
      });

    }



}
