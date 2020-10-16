import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProfilPageRoutingModule } from './admin-profil-routing.module';

import { AdminProfilPage } from './admin-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProfilPageRoutingModule
  ],
  declarations: [AdminProfilPage]
})
export class AdminProfilPageModule {}
