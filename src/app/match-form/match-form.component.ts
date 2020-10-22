import { CitySearchComponent } from './../city-search/city-search.component';
import { MapService } from './../services/map.service';
import { MatchService } from './../services/match.service';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Match } from '../models/match.model';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.scss'],
})
export class MatchFormComponent {
  @Input() newMatch: Match;
  @Input() showAddEvent: string;
  @Input() playersList: Array<string>;
  @Input() selectedDate: Date;
  @Input() existing?;
  starth;
  startm;
  endh;
  endm;
  errorMessage: string;
  isItemAvailable = false;
  items = [];
  emptyField = false;

  constructor(
    private modalCtrl: ModalController,
    private mapServ: MapService,
    private matchServ: MatchService,
  ) {

  }

  ionViewWillEnter() {
    if (!this.existing) {
      this.newMatch.startTime = new Date(this.selectedDate);
      this.newMatch.endTime = new Date(this.selectedDate);
    }
    this.starth = this.newMatch.startTime.getHours();
    this.startm = this.getmins(this.newMatch.startTime);
    this.endh = this.newMatch.endTime.getHours();
    this.endm = this.getmins(this.newMatch.endTime);
  }

  // Modal
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
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

  openCitySearch() {
    const props = {
      newMatch: this.newMatch
    };
    this.presentModal(CitySearchComponent, props, 'citySearchModal');
  }

  // Outils Fonctionnels

  getmins(date) {
    let mins = date.getMinutes();
    if (mins === 0) {
      return mins = '00';
    } else {
      return mins;
    }
  }


  // Service
  addMatch(form) {
    this.modifyHours(form);
    this.matchServ.addMatch(this.newMatch);
    this.dismiss();
  }

  editMatch(form) {
    this.modifyHours(form);
    this.matchServ.editMatch(this.newMatch).then(
      () => this.dismiss(),
      err => this.errorMessage = 'Impossible de modifier le match'
    );
  }

  modifyHours(form) {
    form.value.startHour = form.value.startHour.split(':');
    if (form.value.endHour) {
      form.value.endHour = form.value.endHour.split(':');
      this.newMatch.endTime.setHours(form.value.endHour[0], form.value.endHour[1]);
    } else {
      this.newMatch.endTime.setHours(Number(form.value.startHour[0]) + 2, form.value.startHour[1]);
    }
    this.newMatch.startTime.setHours(form.value.startHour[0], form.value.startHour[1]);
    this.newMatch.city = this.newMatch.title;
  }

}
