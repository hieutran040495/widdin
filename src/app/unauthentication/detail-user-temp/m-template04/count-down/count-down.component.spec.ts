import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownMasterTemplate04Component } from './count-down.component';

describe('CountdownMasterTemplate04Component', () => {
  let component: CountdownMasterTemplate04Component;
  let fixture: ComponentFixture<CountdownMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
