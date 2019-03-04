import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMasterTemplate03Component } from './story.component';

describe('StoryMasterTemplate03Component', () => {
  let component: StoryMasterTemplate03Component;
  let fixture: ComponentFixture<StoryMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
