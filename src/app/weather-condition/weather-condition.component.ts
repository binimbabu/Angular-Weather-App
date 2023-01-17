import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.css']
})
export class WeatherConditionComponent implements OnInit {
  now = Date.now();
  products:any= [];
  firstElement:any;
  currents:any= [];
  locations:any= [];
  imgsrc:any;
 
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getProducts();

  }
  getProducts() {
    this.products = [];
    this.weatherService.getContacts().subscribe(res => {      
      this.products = res.body;
      this.currents = res.body.current;
      this.imgsrc = this.currents.condition.icon;
      this.locations = res.body.location;
      console.log("this.products", this.products)
    });
  }

 
  
}
