import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpMasterTemplate04Component } from './rsvp.component';

describe('RsvpMasterTemplate04Component', () => {
  let component: RsvpMasterTemplate04Component;
  let fixture: ComponentFixture<RsvpMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
