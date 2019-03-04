import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VWidgetCategoryComponent } from './v-widget-category.component';

describe('VWidgetCategoryComponent', () => {
  let component: VWidgetCategoryComponent;
  let fixture: ComponentFixture<VWidgetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VWidgetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VWidgetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
