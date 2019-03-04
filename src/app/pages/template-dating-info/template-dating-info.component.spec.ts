import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDatingInfoComponent } from './template-dating-info.component';

describe('TemplateDatingInfoComponent', () => {
  let component: TemplateDatingInfoComponent;
  let fixture: ComponentFixture<TemplateDatingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDatingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDatingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
