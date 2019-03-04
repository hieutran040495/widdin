import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMasterTemplate02Component } from './story.component';

describe('StoryMasterTemplate02Component', () => {
  let component: StoryMasterTemplate02Component;
  let fixture: ComponentFixture<StoryMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
