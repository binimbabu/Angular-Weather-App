import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  place:any = 'London';
  place1:any = 'USA';
  place2:any = 'India';
  apiURL: string = 'https://api.weatherapi.com/v1/current.json?key=75e8f3fc04db4fcfba353829231701 &q=${place}&aqi=no';
  apiURL1: string = 'https://api.weatherapi.com/v1/current.json?key=75e8f3fc04db4fcfba353829231701 &q=USA&aqi=no';
  apiURL2: string = 'https://api.weatherapi.com/v1/current.json?key=75e8f3fc04db4fcfba353829231701 &q=India&aqi=no';
  constructor(private httpClient: HttpClient) { }
  public getContacts(url?: string){   

    return this.httpClient.get<any>(`${this.apiURL}`,
    { observe: 'response' }).pipe(tap(res => {
      return res;
    }));
  }
  public getPlace1(url1?: string){ 
    return this.httpClient.get<any>(`${this.apiURL1}`,
    { observe: 'response' }).pipe(tap(res => {
      return res;
    }));
  }

  public getPlace2(url1?: string){ 
    return this.httpClient.get<any>(`${this.apiURL2}`,
    { observe: 'response' }).pipe(tap(res => {
      return res;
    }));
  }
}
