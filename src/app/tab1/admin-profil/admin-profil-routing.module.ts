import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProfilPage } from './admin-profil.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProfilPageRoutingModule {}
