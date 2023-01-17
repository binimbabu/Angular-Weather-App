import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheroneComponent } from './weatherone.component';

describe('WeatheroneComponent', () => {
  let component: WeatheroneComponent;
  let fixture: ComponentFixture<WeatheroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatheroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatheroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
