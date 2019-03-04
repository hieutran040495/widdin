import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforMasterTemplate02Component } from './infor.component';

describe('InforMasterTemplate02Component', () => {
  let component: InforMasterTemplate02Component;
  let fixture: ComponentFixture<InforMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
