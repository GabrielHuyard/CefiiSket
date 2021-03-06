import { PlayerFormComponent } from './../../player-form/player-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerProfilPageRoutingModule } from './player-profil-routing.module';

import { PlayerProfilPage } from './player-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerProfilPageRoutingModule
  ],
  declarations: [
    PlayerProfilPage,
    PlayerFormComponent
  ]
})
export class PlayerProfilPageModule {}
