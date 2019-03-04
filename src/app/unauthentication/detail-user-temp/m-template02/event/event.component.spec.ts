import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMasterTemplate02Component } from './event.component';

describe('EventMasterTemplate02Component', () => {
  let component: EventMasterTemplate02Component;
  let fixture: ComponentFixture<EventMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
