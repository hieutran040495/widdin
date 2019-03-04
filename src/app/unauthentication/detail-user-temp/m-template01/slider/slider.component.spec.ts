import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMasterTemplate01Component } from './slider.component';

describe('SliderMasterTemplate01Component', () => {
  let component: SliderMasterTemplate01Component;
  let fixture: ComponentFixture<SliderMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
