import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  response: any
  weatherTemp: any
  todayDate  = new Date();
  cityName: any
  weatherIcon:any
  weatherDetails:any


  constructor(public httpClient: HttpClient) {
    this.loadData();
  }

  loadData(){

// [Log] {coord: {lon: 28.9833, lat: 41.0351}, weather: Array, base: "stations", main: Object, visibility: 10000, …} (src_app_home_home_module_ts.js, line 123)
    this.httpClient.get(API_URL+"/weather?q=Istanbul&appid="+API_KEY).subscribe(results => {

      this.response  =results
      this.weatherTemp = results
      this.cityName = this.weatherTemp?.name
      this.weatherTemp = this.weatherTemp?.main
      this.weatherDetails = this.response.weather[0]
      this.weatherIcon = "http://openweathermap.org/img/wn/"+this.weatherDetails.icon+".png"


      console.log(this.weatherDetails);

    });


  }

}
