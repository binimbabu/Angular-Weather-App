import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nameString = '';
  openClose:string='open';
  currents:any= [];
  locations:any= [];
  products:any= [];
  imgsrc:any;
  currents1:any= [];
  locations1:any= [];
  products1:any= [];
  imgsrc1:any;
  currents2:any= [];
  locations2:any= [];
  products2:any= [];
  imgsrc2:any;
  hideAndShow(){
   this.openClose = (this.openClose === 'open') ? 'close' : 'open';
  }
  constructor(private router: Router, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProducts1();
    this.getProducts2();
  }
  navigate(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getProducts() {
    this.currents = [];
    this.weatherService.getContacts().subscribe(res => {  
      this.products = res.body;    
      this.currents = res.body.current;
      this.imgsrc = this.currents.condition.icon;
      this.locations = res.body.location;
    });
  }
  getProducts1() {
    this.currents1 = [];
    this.weatherService.getPlace1().subscribe(res => {  
      this.products1 = res.body;    
      this.currents1 = res.body.current;
      this.imgsrc1 = this.currents.condition.icon;
      this.locations1 = res.body.location;
    });
  }

  getProducts2() {
    this.currents1 = [];
    this.weatherService.getPlace2().subscribe(res => {  
      this.products2 = res.body;    
      this.currents2 = res.body.current;
      this.imgsrc2 = this.currents.condition.icon;
      this.locations2 = res.body.location;
    });
  }
}
