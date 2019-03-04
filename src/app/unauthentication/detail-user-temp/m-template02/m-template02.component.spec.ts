import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTemplate02Component } from './m-template02.component';

describe('MasterTemplate02Component', () => {
  let component: MasterTemplate02Component;
  let fixture: ComponentFixture<MasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
