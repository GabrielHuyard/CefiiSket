import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url.split('/')[1]);
  }

}
