import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherConditionComponent } from './weather-condition/weather-condition.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatheroneComponent } from './weatherone/weatherone.component';
import { WeathertwoComponent } from './weathertwo/weathertwo.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    WeatherConditionComponent,
    NavbarComponent,
    WeatheroneComponent,
    WeathertwoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
