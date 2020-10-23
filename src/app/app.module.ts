import { MatchCardComponent } from './match-card/match-card.component';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from './../environments/environment';
import { element } from 'protractor';
import { FormsModule } from '@angular/forms';
import { NgCalendarModule } from 'ionic2-calendar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    HttpClientModule,
    NgCalendarModule,

    ],
  providers: [
    StatusBar,
    AngularFirestore,
    AngularFireStorage,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MatchCardComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
