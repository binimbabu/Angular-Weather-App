import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherConditionComponent } from './weather-condition/weather-condition.component';
import { WeatheroneComponent } from './weatherone/weatherone.component';
import { WeathertwoComponent } from './weathertwo/weathertwo.component';

const routes: Routes = [
  {path: 'weather', component: WeatherConditionComponent},
  { path: 'weatherOne', component: WeatheroneComponent },
  { path: 'weatherTwo', component: WeathertwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
