import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventsComponent } from './template-events.component';

describe('TemplateEventsComponent', () => {
  let component: TemplateEventsComponent;
  let fixture: ComponentFixture<TemplateEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
