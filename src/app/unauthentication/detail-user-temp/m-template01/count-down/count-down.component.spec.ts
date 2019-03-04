import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownMasterTemplate01Component } from './count-down.component';

describe('CountdownMasterTemplate01Component', () => {
  let component: CountdownMasterTemplate01Component;
  let fixture: ComponentFixture<CountdownMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
