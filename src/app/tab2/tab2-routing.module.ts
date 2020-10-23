import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'player-listmatch',
    loadChildren: () => import('./player-listmatch/player-listmatch.module').then( m => m.PlayerListmatchPageModule)
  },
  {
    path: 'player-profil',
    loadChildren: () => import('./player-profil/player-profil.module').then( m => m.PlayerProfilPageModule)
  },
  {
    path: 'match-details',
    loadChildren: () => import('./match-details/match-details.module').then( m => m.MatchDetailsPageModule)
  },
  {
    path: 'profil-details',
    loadChildren: () => import('./profil-details/profil-details.module').then( m => m.ProfilDetailsPageModule)
  },
  {
    path: 'profil-update',
    loadChildren: () => import('./profil-update/profil-update.module').then( m => m.ProfilUpdatePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
