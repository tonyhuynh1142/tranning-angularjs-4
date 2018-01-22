import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {

  constructor(private http: Http) {}

  getTemp(cityName: string) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=22ce841b8099f48b0f9a88061329726b&units=metric&q=' + cityName;

    // console.log(url);

    return this.http.get(url)
    .toPromise()
    .then( res => res.json())
    .then( resJson =>  resJson.main.temp);
  }
}
