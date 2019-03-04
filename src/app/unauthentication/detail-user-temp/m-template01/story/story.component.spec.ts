import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMasterTemplate01Component } from './story.component';

describe('StoryMasterTemplate01Component', () => {
  let component: StoryMasterTemplate01Component;
  let fixture: ComponentFixture<StoryMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
