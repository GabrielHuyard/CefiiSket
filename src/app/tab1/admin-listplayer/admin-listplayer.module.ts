import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListplayerPageRoutingModule } from './admin-listplayer-routing.module';

import { AdminListplayerPage } from './admin-listplayer.page';
import { ModifPlayerComponent } from 'src/app/modif-player/modif-player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListplayerPageRoutingModule,
  ],
  declarations: [AdminListplayerPage, ModifPlayerComponent]
})
export class AdminListplayerPageModule {}
