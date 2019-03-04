import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownMasterTemplate03Component } from './count-down.component';

describe('CountdownMasterTemplate03Component', () => {
  let component: CountdownMasterTemplate03Component;
  let fixture: ComponentFixture<CountdownMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
