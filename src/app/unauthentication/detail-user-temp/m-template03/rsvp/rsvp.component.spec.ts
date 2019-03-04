import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpMasterTemplate03Component } from './rsvp.component';

describe('RsvpMasterTemplate03Component', () => {
  let component: RsvpMasterTemplate03Component;
  let fixture: ComponentFixture<RsvpMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
