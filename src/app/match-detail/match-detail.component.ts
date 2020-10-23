import { PlayerService } from 'src/app/services/player.service';
import { MatchFormComponent } from './../match-form/match-form.component';
import { MatchService } from './../services/match.service';
import { Match } from './../models/match.model';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
})
export class MatchDetailComponent {
  @Input() match: Match;
  errorMessage: string;
  playersList = [];
  constructor(
    private modalCtrl: ModalController,
    private matchServ: MatchService,
    private playerServ: PlayerService
  ) { }

  ionViewWillEnter() {
    this.playerServ.getAllPlayers().subscribe((datas) => {
      for (const data of datas) {
        if (data.Nom) {
          console.log(this.playersList);
          this.playersList.push(data.Nom);
        }
      }
    });
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

  editMatch() {
      const props = {
        newMatch: this.match,
        existing: true,
        showAddEvent: true,
        playersList: this.playersList
      };
      this.presentModal(MatchFormComponent, props, 'matchFormModal');
    }

  deleteMatch() {
      this.matchServ.deleteMatch(this.match.id).then(
        () => { this.dismiss(); },
        err => this.errorMessage = 'Ce match n\'a pas pu être supprimé, veuillez rééssayer'
      );
    }
}
