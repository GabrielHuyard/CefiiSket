import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListmatchPageRoutingModule } from './admin-listmatch-routing.module';

import { AdminListmatchPage } from './admin-listmatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListmatchPageRoutingModule
  ],
  declarations: [AdminListmatchPage]
})
export class AdminListmatchPageModule {}
