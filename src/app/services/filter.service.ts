import { Match } from './../models/match.model';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }


  filterMatches(matches: Match[], filterValue, filterType: string) {
    switch (filterType) {
      case 'city':
        return matches = matches.filter((match) => {
          return (match.city.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
        });
      case 'date':
        filterValue = new Date(filterValue);
        filterValue = filterValue.getDay() + filterValue.getMonth() + filterValue.getYear();
        return matches = matches.filter((match) => {
          let matchtime;
          matchtime = match.startTime.getDay() + match.startTime.getMonth() + match.startTime.getYear();
          return matchtime === filterValue;
        });
      case 'myMatches':
        return matches = matches.filter((match) => {
          return match.players.includes(filterValue);
        });

      default:
        break;
    }

  }
}
