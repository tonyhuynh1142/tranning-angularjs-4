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
  isLoading = false;

  constructor(private weatherService : WeatherService) {}

  ngOnInit()  {}

  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
    .then( temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
      this.isLoading = false;
    })
    .catch( err => {
      alert('Cannot find your city !');
      this.isLoading = false;
      this.cityName = '';
      this.txtCityName = '';
    });
  }

  getMessage() {
    if(this.isLoading) {
      return 'Loading...';
    }

    return this.cityName === '' ? 'Enter your city name ' : ( this.cityName + ' is now ' + this.temp )
  }

}
