import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpMasterTemplate01Component } from './rsvp.component';

describe('RsvpMasterTemplate01Component', () => {
  let component: RsvpMasterTemplate01Component;
  let fixture: ComponentFixture<RsvpMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
