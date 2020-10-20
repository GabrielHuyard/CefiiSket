import { MatchFormComponent } from './../match-form/match-form.component';
import { PlayerComponent } from './../player/player.component';
import { MatchComponent } from './../match/match.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, MatchComponent, PlayerComponent, MatchFormComponent]
})
export class Tab1PageModule {}
