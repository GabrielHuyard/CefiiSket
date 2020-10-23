import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListmatchPage } from './admin-listmatch.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListmatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListmatchPageRoutingModule {}
