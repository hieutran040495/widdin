import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCoupleInfoComponent } from './template-couple-info.component';

describe('TemplateCoupleInfoComponent', () => {
  let component: TemplateCoupleInfoComponent;
  let fixture: ComponentFixture<TemplateCoupleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCoupleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCoupleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
