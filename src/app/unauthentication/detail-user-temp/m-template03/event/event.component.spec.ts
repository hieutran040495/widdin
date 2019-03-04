import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMasterTemplate03Component } from './event.component';

describe('EventMasterTemplate03Component', () => {
  let component: EventMasterTemplate03Component;
  let fixture: ComponentFixture<EventMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
