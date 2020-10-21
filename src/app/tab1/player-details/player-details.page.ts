import { PlayerService } from './../../services/player-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  userList = [];
  constructor(public authService: PlayerService) { }

  ngOnInit() {
    this.authService.getAllUsers().subscribe(datas => {
      const DATALIST = datas;
      for (const user of DATALIST) {
        if (user.status === false) {
          this.userList.push(user);
        }
      }
    }, err => console.log(err));
  }

}
