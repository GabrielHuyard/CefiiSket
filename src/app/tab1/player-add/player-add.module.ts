import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerAddPageRoutingModule } from './player-add-routing.module';

import { PlayerAddPage } from './player-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerAddPageRoutingModule
  ],
  providers: [
    FirebaseAuthentication,
  ],
  declarations: [PlayerAddPage]
})
export class PlayerAddPageModule {}
