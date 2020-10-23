import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  apiURL = 'https://geo.api.gouv.fr/communes?';

  constructor(private http: HttpClient) { }

  getAllCities(val): Observable<any> {
    const REQ = `${this.apiURL}nom=${val}&limit=10`;
    return this.http.get(REQ);
  }

}
