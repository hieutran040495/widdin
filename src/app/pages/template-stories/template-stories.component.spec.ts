import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStoriesComponent } from './template-stories.component';

describe('TemplateStoriesComponent', () => {
  let component: TemplateStoriesComponent;
  let fixture: ComponentFixture<TemplateStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
