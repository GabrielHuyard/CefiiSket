import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListmatchPage } from './player-listmatch.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerListmatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerListmatchPageRoutingModule {}
