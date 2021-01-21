import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherbitService {
  
  apiKEY: string = 'f2e72c0506fe42ca90fe869aeca6b59a'
  apiURL: string = 'https://api.weatherbit.io/v2.0/current';
  constructor(private http: HttpClient) {}
  
  public getData(CityName: string): Observable<Object> {
    return this.http.get(this.apiURL+'?key='+this.apiKEY+'&city='+CityName);
  }
}
