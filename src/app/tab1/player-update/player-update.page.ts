import { Users } from './../../player.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.page.html',
  styleUrls: ['./player-update.page.scss'],
})
export class PlayerUpdatePage implements OnInit {

  player: Users = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerServ: PlayerService
  ) { }

  ngOnInit() {
    this.getThisPlayer();

  }


  getThisPlayer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerServ.getPlayer(id).subscribe(datas => {
      this.player = { id, ...datas };
    }, err => console.log(err));
  }

}
