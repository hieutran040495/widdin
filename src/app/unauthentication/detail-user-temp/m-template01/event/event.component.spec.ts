import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMasterTemplate01Component } from './event.component';

describe('EventMasterTemplate01Component', () => {
  let component: EventMasterTemplate01Component;
  let fixture: ComponentFixture<EventMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
