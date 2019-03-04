import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMaximsComponent } from './template-maxims.component';

describe('TemplateMaximsComponent', () => {
  let component: TemplateMaximsComponent;
  let fixture: ComponentFixture<TemplateMaximsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateMaximsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMaximsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
