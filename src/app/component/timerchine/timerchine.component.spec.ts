import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerchineComponent } from './timerchine.component';

describe('TimerchineComponent', () => {
  let component: TimerchineComponent;
  let fixture: ComponentFixture<TimerchineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerchineComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerchineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
