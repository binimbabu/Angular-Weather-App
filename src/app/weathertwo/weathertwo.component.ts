import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathertwo',
  templateUrl: './weathertwo.component.html',
  styleUrls: ['./weathertwo.component.css']
})
export class WeathertwoComponent implements OnInit {
  now = Date.now();
  products2:any= [];
  currents2:any= [];
  locations2:any= [];
  imgsrc2:any;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getProducts2();
  }
  getProducts2() {
    this.currents2 = [];
    this.weatherService.getPlace2().subscribe(res => {
      this.products2 = res;    
      this.currents2 = res.body.current;
      this.imgsrc2 = this.currents2.condition.icon;
      this.locations2 = res.body.location;   
    });
  }
}
