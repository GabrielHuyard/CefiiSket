import { MatchService } from './../services/match.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapService } from '../services/map.service';
import { Match } from '../models/match.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {
  @Input() newMatch: Match;
  errorMessage: string;
  isItemAvailable = false;
  items = [];
  emptyField = true;
  constructor(
    private modalCtrl: ModalController,
    private mapServ: MapService,
    private matchServ: MatchService,
  ) { }

  ngOnInit() { }


  // Searchbar
  initializeItems(val) {
    this.items = [];
    this.isItemAvailable = false;
    this.mapServ.getAllCities(val).subscribe(
      (datas) => {
        for (const data of datas) {
          this.items.push(data);
          this.isItemAvailable = (this.items.length > 0);
        }
      }

    );

  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // Reset items back to all of the items
    this.initializeItems(val);


    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.emptyField = false;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.emptyField = true;
    }
    console.log(this.isItemAvailable);
    console.log(this.emptyField);


  }

  chooseCity(city: string) {
    this.newMatch.title = city;
    this.items = [];
    this.isItemAvailable = false;
    this.emptyField = true;
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
