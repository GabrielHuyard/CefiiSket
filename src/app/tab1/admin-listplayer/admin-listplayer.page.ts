import { ModifPlayerComponent } from './../../modif-player/modif-player.component';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../../player.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-listplayer',
  templateUrl: './admin-listplayer.page.html',
  styleUrls: ['./admin-listplayer.page.scss'],
})
export class AdminListplayerPage implements OnInit{

  players: Users[];
  player: Users;

  constructor(
    private playerServ: PlayerService,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {

    this.getListPlayers();


  }


  getListPlayers(): void {
    this.playerServ.getAllPlayers().subscribe(datas => {
      return this.players = datas;
    }, err => console.log(err));


  }

  editPlayer(id: string): void {
    const infos = {
      id
    };
    this.presentModal(ModifPlayerComponent, infos, 'black');
  }


   deletePlayer(player: string): void {
    if (confirm('Souhaitez-vous vraiment supprimer ce joueur ?')) {
      this.playerServ.deleteAPlayer(player).then(() => {
        this.playerServ.deletePlayerStorage(player).subscribe(() => {
          this.router.navigate(['tabs/tab1/admin-listplayer']);
        });

        }, err => {
          console.log(err);
          alert ('Problème !');

        });
      }



  }

    // Modal
    async presentModal(requestedModal, props: object, cssClass) {
      const modal = await this.modalCtrl.create({
        component: requestedModal,
        cssClass: `${cssClass}`,
        componentProps: props
      });
      return await modal.present();
    }
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalCtrl.dismiss({
        dismissed: true
      });
    }



}
