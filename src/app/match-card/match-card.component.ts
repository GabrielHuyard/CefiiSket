import { MatchDetailComponent } from './../match-detail/match-detail.component';
import { ModalController } from '@ionic/angular';
import { Match } from './../models/match.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
  @Input() matches;
  match: Match;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  // Modal
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async presentModal(requestedModal, props: object, cssClass) {
    const modal = await this.modalCtrl.create({
      component: requestedModal,
      cssClass: `${cssClass}`,
      componentProps: props
    });
    return await modal.present();
  }

  onEventDetail(match: Match) {
    const props = {
      match
    };
    this.presentModal(MatchDetailComponent, props, 'matchDetailModal');
  }

}
