import { PlayerService } from './../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  message: string;
  login: '';
  pw: '';
  contact = false;
  redirect = '';
  userList: Array<any>;
  constructor( public authService: AuthServiceService,
               private router: Router,
               private alertCtrl: AlertController,
               private playerServ: PlayerService
              ) {
                }
ngOnInit(){
 this.getUserList();
 console.log(this.router.url.split('/')[1]);
}
getUserList(){
  this.authService.getAllUsers().subscribe(datas => {
    this.userList = datas;
    console.log(this.userList);
  }, err => console.log(err));
}
userStatus(login: string){
  for (const u of this.userList) {
     if (u.Mail === login){
    this.playerServ.currentUser = u;
    this.authService.userLog = u;
    return u.status;
  }
  }
}

 async loginUser(values: any): Promise<void> {
    this.authService.loginUser(values.login, values.pw).then(
      () => {
        this.authService.isLog = true;
        const ADMINS = this.userStatus(values.login);
        this.authService.status = false;
        this.redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'tabs/tab2';
        if (ADMINS){
          this.redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'tabs/tab1';
          this.authService.status = true;
        }
        this.authService.setRedirect(true);
        this.login = '';
        this.pw = '';
        this.router.navigate([this.redirect]);
      },
      async error => {
        console.log(error);
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }
  onclickSet(){
    this.contact = false;
  }
  onclickSetCont(){
     this.contact = true;
  }


}
