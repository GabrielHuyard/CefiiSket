import { AngularFireStorage } from '@angular/fire/storage';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    Tab1PageRoutingModule,
  ],
  providers: [
    AngularFireStorage
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
