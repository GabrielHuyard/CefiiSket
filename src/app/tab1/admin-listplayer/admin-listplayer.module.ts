import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListplayerPageRoutingModule } from './admin-listplayer-routing.module';

import { AdminListplayerPage } from './admin-listplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListplayerPageRoutingModule
  ],
  declarations: [AdminListplayerPage]
})
export class AdminListplayerPageModule {}
