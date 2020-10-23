
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  contact = false;
  redirect = false;
  status = false;
  constructor( public authService: AuthServiceService,
               private router: Router,
              ) {
                }
ngOnInit(){
  this.redirect = this.authService.redirect;
  this.status = this.authService.status;
}
  onclickSet(){
    this.contact = false;
  }
  onclickSetCont(){
     this.contact = true;
  }
  async logOut(){
    this.authService.logoutUser().then( () => {
      this.authService.isLog = false;
      this.redirect = false;
      this.authService.logoutUser().then( () => {
      this.router.navigate(['']);
      console.log(this.redirect);
    }, err => console.log (err));
    });

  }


}
