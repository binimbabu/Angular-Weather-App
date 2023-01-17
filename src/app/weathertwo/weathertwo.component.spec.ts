import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathertwoComponent } from './weathertwo.component';

describe('WeathertwoComponent', () => {
  let component: WeathertwoComponent;
  let fixture: ComponentFixture<WeathertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathertwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
