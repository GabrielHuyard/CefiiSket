import { PlayerFormComponent } from './../../player-form/player-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerUpdatePageRoutingModule } from './player-update-routing.module';

import { PlayerUpdatePage } from './player-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerUpdatePageRoutingModule,
  ],
  declarations: [PlayerUpdatePage, PlayerFormComponent]
})
export class PlayerUpdatePageModule {}
