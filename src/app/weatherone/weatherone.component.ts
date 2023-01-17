import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherone',
  templateUrl: './weatherone.component.html',
  styleUrls: ['./weatherone.component.css']
})
export class WeatheroneComponent implements OnInit {
  now = Date.now();
  products1:any= [];
  currents1:any= [];
  locations1:any= [];
  imgsrc1:any;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getProducts1();
  }
  getProducts1() {
    this.currents1 = [];
    this.weatherService.getPlace1().subscribe(res => { 
      console.log( res, "res") 
      this.products1 = res;    
      this.currents1 = res.body.current;
      this.imgsrc1 = this.currents1.condition.icon;
      this.locations1 = res.body.location; 
    });
  }
}
