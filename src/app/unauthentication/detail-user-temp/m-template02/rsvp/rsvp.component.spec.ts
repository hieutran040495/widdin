import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpMasterTemplate02Component } from './rsvp.component';

describe('RsvpMasterTemplate02Component', () => {
  let component: RsvpMasterTemplate02Component;
  let fixture: ComponentFixture<RsvpMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
