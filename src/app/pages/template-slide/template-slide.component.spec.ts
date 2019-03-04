import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSlideComponent } from './template-slide.component';

describe('TemplateSlideComponent', () => {
  let component: TemplateSlideComponent;
  let fixture: ComponentFixture<TemplateSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
