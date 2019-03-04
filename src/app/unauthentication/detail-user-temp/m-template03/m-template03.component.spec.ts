import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTemplate03Component } from './m-template03.component';

describe('MasterTemplate03Component', () => {
  let component: MasterTemplate03Component;
  let fixture: ComponentFixture<MasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
