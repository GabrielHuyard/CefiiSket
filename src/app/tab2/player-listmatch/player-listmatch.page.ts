import { PlayerService } from 'src/app/services/player.service';
import { FilterService } from './../../services/filter.service';
import { MatchDetailComponent } from './../../match-detail/match-detail.component';
import { ModalController } from '@ionic/angular';
import { MatchService } from './../../services/match.service';
import { Match } from './../../models/match.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-listmatch',
  templateUrl: './player-listmatch.page.html',
  styleUrls: ['./player-listmatch.page.scss'],
})
export class PlayerListmatchPage implements OnInit {
  match: Match;
  matches: Array<Match>;
  filteredMatches: Array<Match>;
  filterValue;
  filterDate = new Date();
  filterType = 'city';
  cityButton = true;
  dateButton = false;
  myButton = false;
  currentUser;


  constructor(
    private matchServ: MatchService,
    private modalCtrl: ModalController,
    private filterServ: FilterService,
    private playerServ: PlayerService
    ) { }

  ngOnInit() {
    this.matches = [];
    this.getMatches();
    this.currentUser = this.playerServ.currentUser;
  }

  getMatches() {
    this.matchServ.getMatches().subscribe(datas => {
      for (const i of datas) {
        i.startTime = new Date(i.startTime.seconds * 1000);
        i.endTime = new Date(i.endTime.seconds * 1000);
      }
      return this.matches = this.filteredMatches = datas;
    }, err => console.log('erreur getMatches()'));
  }

  seeMatch(match) {
    const props = {
      match
    }
    this.presentModal(MatchDetailComponent, props, 'matchDetail')
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

  filter(input){
    this.filteredMatches = this.filterServ.filterMatches(this.matches, input, this.filterType);
  }

  filterBy(filter: string) {
    switch (filter) {
      case 'city':
        this.cityButton = true;
        this.dateButton = false;
        this.myButton = false;
        this.filterType = 'city';
        this.filter('');
        break;
      case 'date':
        this.cityButton = false;
        this.dateButton = true;
        this.myButton = false;
        this.filterType = 'date';
        this.filter(this.filterDate);
        break;
      case 'myMatches':
        this.cityButton = false;
        this.dateButton = false;
        this.myButton = true;
        this.filterType = 'myMatches';
        this.filter(this.currentUser.id);
        console.log(this.currentUser);
        
        break;
      default:
        break;
    }
  }

}
