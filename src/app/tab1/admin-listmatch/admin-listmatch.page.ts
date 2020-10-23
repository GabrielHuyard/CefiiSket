import { Match } from './../../models/match.model';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-listmatch',
  templateUrl: './admin-listmatch.page.html',
  styleUrls: ['./admin-listmatch.page.scss'],
})
export class AdminListmatchPage implements OnInit {
  currentMonth;
  matches = Array<Match>();
  calendarVar = false;
  constructor(private matchServ: MatchService) {
  }

  ngOnInit() {
    this.matches = [];
    this.getMatches();
  }

  getMatches() {
    this.matchServ.getMatches().subscribe(datas => {
      for (const i of datas) {
        i.startTime = new Date(i.startTime.seconds * 1000);
        i.endTime = new Date(i.endTime.seconds * 1000);
      }
      return this.matches = datas;
    }, err => console.log('erreur getMatches()'));
  }

  calendarList(bool: boolean) {
    if (bool) {
      this.calendarVar = true;
    } else {
      this.calendarVar = false;
    }
  }

  deleteMatch(match: Match) {
    if (confirm('Etes-vous sûr ?')) {
      this.matchServ.deleteMatch(match.id).then(() => 'Match supprimé');
    }
  }




}
