import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMasterTemplate03Component } from './slider.component';

describe('SliderMasterTemplate03Component', () => {
  let component: SliderMasterTemplate03Component;
  let fixture: ComponentFixture<SliderMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
