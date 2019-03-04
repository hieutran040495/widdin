import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMasterTemplate04Component } from './slider.component';

describe('SliderMasterTemplate04Component', () => {
  let component: SliderMasterTemplate04Component;
  let fixture: ComponentFixture<SliderMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
