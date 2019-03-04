import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTemplate01Component } from './m-template01.component';

describe('MasterTemplate01Component', () => {
  let component: MasterTemplate01Component;
  let fixture: ComponentFixture<MasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
