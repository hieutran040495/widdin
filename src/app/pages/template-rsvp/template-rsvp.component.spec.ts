import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRSVPComponent } from './template-rsvp.component';

describe('TemplateRSVPComponent', () => {
  let component: TemplateRSVPComponent;
  let fixture: ComponentFixture<TemplateRSVPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRSVPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRSVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
