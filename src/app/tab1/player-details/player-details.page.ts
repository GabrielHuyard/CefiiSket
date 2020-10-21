import { PlayerService } from './../../services/player-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  userList:any;
  constructor(public authService: PlayerService) { }

  ngOnInit() {
    this.userList = this.getUserList();
    console.log(this.userList);
    
  }

  getUserList(){
    this.authService.getAllUsers().subscribe(datas => {
      this.userList = datas;
      console.log(this.userList);
    }, err => console.log(err));
  }

}
