import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'admin-page',
    loadChildren: () => import('./admin-page/admin-page.module').then( m => m.AdminPagePageModule)
  },
  {
    path: 'admin-listplayer',
    loadChildren: () => import('./admin-listplayer/admin-listplayer.module').then( m => m.AdminListplayerPageModule)
  },
  {
    path: 'admin-listmatch',
    loadChildren: () => import('./admin-listmatch/admin-listmatch.module').then( m => m.AdminListmatchPageModule)
  },
  {
    path: 'admin-profil',
    loadChildren: () => import('./admin-profil/admin-profil.module').then( m => m.AdminProfilPageModule)
  },
  {
    path: 'player-add',
    loadChildren: () => import('./player-add/player-add.module').then( m => m.PlayerAddPageModule)
  },
  {
    path: 'player-update',
    loadChildren: () => import('./player-update/player-update.module').then( m => m.PlayerUpdatePageModule)
  },
  {
    path: 'player-details',
    loadChildren: () => import('./player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
  {
    path: 'match-add',
    loadChildren: () => import('./match-add/match-add.module').then( m => m.MatchAddPageModule)
  },
  {
    path: 'match-update',
    loadChildren: () => import('./match-update/match-update.module').then( m => m.MatchUpdatePageModule)
  },
  {
    path: 'profil-update',
    loadChildren: () => import('./profil-update/profil-update.module').then( m => m.ProfilUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
