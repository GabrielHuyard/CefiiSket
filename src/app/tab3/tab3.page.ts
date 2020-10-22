import { ContactServiceService } from './../services/contact-services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  adresse = '11 Place Pierre Semard, 49100 Angers';
  tel: any;
  mail: string;

  constructor(
    private contactServ: ContactServiceService
  ) {}
    ngOnInit(){
      this.contactServ.getAllUsers().subscribe(datas => {
        const DATALIST = datas;
        for (const user of DATALIST) {
          if (user.status === true) {
            this.tel = user.Phone;
            this.mail = user.Mail;
          }
        }
      }, err => console.log(err));
    }

}
