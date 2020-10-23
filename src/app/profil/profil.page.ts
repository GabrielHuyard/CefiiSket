import { LoginPage } from './../login/login.page';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  userList:any;

  constructor(
    public authService: AuthServiceService, 
    //private loginPage: LoginPage,
    ) { }

  ngOnInit() {
    this.userList = this.authService.userLog;
    console.log(this.userList);
  }

}
