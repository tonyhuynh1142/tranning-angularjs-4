import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';


/**
 * Generated class for the WeatherAppComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weather-app',
  templateUrl: 'weather-app.html'
})
export class WeatherAppComponent implements OnInit {

  txtCityName = '';
  cityName = '';
  temp = null;

  constructor(private weatherService : WeatherService) {}

  ngOnInit()  {}

  getWeather() {

    this.weatherService.getTemp(this.txtCityName)
    .then( temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
    })
    .catch( err => console.log(err) );
  }

}
