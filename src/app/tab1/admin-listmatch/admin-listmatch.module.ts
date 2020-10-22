import { CitySearchComponent } from './../../city-search/city-search.component';
import { MatchDetailComponent } from './../../match-detail/match-detail.component';
import { MatchFormComponent } from './../../match-form/match-form.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { MatchComponent } from './../../match/match.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { AdminListmatchPageRoutingModule } from './admin-listmatch-routing.module';

import { AdminListmatchPage } from './admin-listmatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListmatchPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [
    AdminListmatchPage,
    MatchComponent,
    MatchFormComponent,
    MatchDetailComponent,
    CitySearchComponent,
  ]
})
export class AdminListmatchPageModule {}
