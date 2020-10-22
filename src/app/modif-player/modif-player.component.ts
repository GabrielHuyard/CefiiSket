import { Users } from './../player.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modif-player',
  templateUrl: './modif-player.component.html',
  styleUrls: ['./modif-player.component.scss'],
})
export class ModifPlayerComponent implements OnInit {

  @Input() id;
  @Input() player: Users;


  constructor(
    private playerServ: PlayerService,
    private router: Router,
    private route: ActivatedRoute,
    private modalCtrl: ModalController

  ) { }

  ngOnInit() {
    this.getThisPlayer();
  }

  getThisPlayer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerServ.getPlayer(id).subscribe(datas => {
      this.player = { id, ...datas };
      console.log(datas);
    }, err => console.log(err));
  }


  onSubmit(): void {
    this.playerServ.updatePlayer(this.player).then(
      () => {
        this.router.navigate(['/users', this.player.id]);
      }, err => {
        console.log(err);
        alert('ERREUR !');

      }
    );

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
