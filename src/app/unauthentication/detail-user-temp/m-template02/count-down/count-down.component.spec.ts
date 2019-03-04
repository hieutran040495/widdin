import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownMasterTemplate02Component } from './count-down.component';

describe('CountdownMasterTemplate02Component', () => {
  let component: CountdownMasterTemplate02Component;
  let fixture: ComponentFixture<CountdownMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
