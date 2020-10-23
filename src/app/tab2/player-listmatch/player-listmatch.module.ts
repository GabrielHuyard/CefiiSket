import { MatchCardComponent } from './../../match-card/match-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerListmatchPageRoutingModule } from './player-listmatch-routing.module';

import { PlayerListmatchPage } from './player-listmatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerListmatchPageRoutingModule
  ],
  declarations: [PlayerListmatchPage,
    MatchCardComponent
  ]
})
export class PlayerListmatchPageModule {}
