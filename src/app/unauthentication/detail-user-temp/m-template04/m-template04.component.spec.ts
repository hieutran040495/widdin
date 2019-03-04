import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTemplate04Component } from './m-template04.component';

describe('MasterTemplate04Component', () => {
  let component: MasterTemplate04Component;
  let fixture: ComponentFixture<MasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
