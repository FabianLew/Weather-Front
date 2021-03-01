import { Component, OnInit } from '@angular/core';
import {RootObject, WeatherClientService} from '../../services/weather-client.service';

@Component({
  selector: 'app-actual-weather',
  templateUrl: './actual-weather.component.html',
  styleUrls: ['./actual-weather.component.css']
})
export class ActualWeatherComponent implements OnInit {

  weather!: RootObject;
  constructor(private weatherClient: WeatherClientService ) { }

  ngOnInit(): void {
  }

  showInfo(city: string): void {
    this.weatherClient.getWeather(city).subscribe(value => {
      this.weather = value;
    });
  }
}
