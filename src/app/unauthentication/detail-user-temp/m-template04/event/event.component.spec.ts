import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMasterTemplate04Component } from './event.component';

describe('EventMasterTemplate04Component', () => {
  let component: EventMasterTemplate04Component;
  let fixture: ComponentFixture<EventMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
