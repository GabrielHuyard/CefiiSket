import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchUpdatePageRoutingModule } from './match-update-routing.module';

import { MatchUpdatePage } from './match-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchUpdatePageRoutingModule
  ],
  declarations: [MatchUpdatePage]
})
export class MatchUpdatePageModule {}
