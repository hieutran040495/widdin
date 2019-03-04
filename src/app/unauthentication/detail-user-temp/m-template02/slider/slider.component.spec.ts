import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMasterTemplate02Component } from './slider.component';

describe('SliderMasterTemplate02Component', () => {
  let component: SliderMasterTemplate02Component;
  let fixture: ComponentFixture<SliderMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
