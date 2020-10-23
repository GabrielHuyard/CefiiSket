import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilUpdatePageRoutingModule } from './profil-update-routing.module';

import { ProfilUpdatePage } from './profil-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilUpdatePageRoutingModule
  ],
  declarations: [ProfilUpdatePage]
})
export class ProfilUpdatePageModule {}
