import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AngularFireModule
  ],
  declarations: [LoginPage],
  providers: [FirebaseAuthentication]
})
export class LoginPageModule {}
