import { Match } from './../models/match.model';
import { MatchDetailComponent } from './../match-detail/match-detail.component';
import { MatchFormComponent } from './../match-form/match-form.component';
import { AdminListmatchPage } from './../tab1/admin-listmatch/admin-listmatch.page';
import { CalendarComponent } from 'ionic2-calendar';
import { MatchService } from './../services/match.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ModalController } from '@ionic/angular';
registerLocaleData(localeFR, 'fr');

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  // Données fictives
  playersList = ['joueur1', 'joueur2', 'joueur3', 'joueur4'];
  // Elements de départ
  newMatch: Match = {
    city: '',
    players: this.playersList,
    startTime: new Date(),
    endTime: new Date(),
    location: {
      latitude: 0,
      longitude: 0
    },
    title: '',
    opponent: ''
  };


  // Elements du module Calendar
  @ViewChild(CalendarComponent, { static: false }) myCalendar: CalendarComponent;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  allMatches = [];
  selectedDate: Date;

  // Bouton + / x
  showAddEvent = false;

  constructor(
    private matchServ: MatchService,
    private adminlist: AdminListmatchPage,
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.updateMatches();
  }
  // MODAL ////////////////////////////
  // Formulaire
  async presentModal(requestedModal, props: object, cssClass) {
    const modal = await this.modalCtrl.create({
      component: requestedModal,
      cssClass: `${cssClass}`,
      componentProps: props
    });
    return await modal.present();
  }


  // CALENDAR ///////////////////////////
  showAdd(query: string) {
    if (query === 'open') {
      this.showAddEvent = true;
      const props = {
        newMatch: this.newMatch,
        showAddEvent: this.showAddEvent,
        playersList: this.playersList,
        selectedDate: this.selectedDate
      };
      this.presentModal(MatchFormComponent, props, 'matchFormModal');
    } else {
      this.showAddEvent = false;
    }
  }
  onViewTitleChanged(title) {
    this.adminlist.currentMonth = title;
  }

  onEventSelected(event) {
  }

  onTimeSelected(ev) {
  }

  onCurrentDateChanged(event: Date) {
    this.selectedDate = event;
  }

  onRangeChanged(ev) {
  }

  onEventDetail(match: Match) {
    const props = {
      match
    };
    this.presentModal(MatchDetailComponent, props, 'matchDetailModal');
  }

  updateMatches() {
    this.matchServ.getMatches().subscribe(datas => {
      for (const i of datas) {
        i.startTime = new Date(i.startTime.seconds * 1000);
        i.endTime = new Date(i.endTime.seconds * 1000);
      }
      return this.allMatches = datas;
    }, err => console.log('erreur getMatches()'));
  }



}
