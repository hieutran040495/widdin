import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforMasterTemplate04Component } from './infor.component';

describe('InforMasterTemplate04Component', () => {
  let component: InforMasterTemplate04Component;
  let fixture: ComponentFixture<InforMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
