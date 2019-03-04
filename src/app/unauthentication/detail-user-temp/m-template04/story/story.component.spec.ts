import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMasterTemplate04Component } from './story.component';

describe('StoryMasterTemplate04Component', () => {
  let component: StoryMasterTemplate04Component;
  let fixture: ComponentFixture<StoryMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
