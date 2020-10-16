import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListplayerPage } from './admin-listplayer.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListplayerPageRoutingModule {}
