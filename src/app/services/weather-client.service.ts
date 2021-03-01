import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherClientService {
  private WEB_URL: string;
  constructor(private httpClient: HttpClient) {
    this.WEB_URL = 'http://localhost:8080/';
  }

  public getWeather(city: string): Observable<RootObject>{
    return this.httpClient.get<RootObject>(this.WEB_URL + 'weather/' + city);
  }
}

export interface RootObject {
  locationName: string;
  locationCountry: string;
  temperature: number;
  windSpeed: number;
  pressure: number;
}
