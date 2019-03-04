import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUserTemplateComponent } from './detail-user-temp.component';

describe('DetailUserTemplateComponent', () => {
  let component: DetailUserTemplateComponent;
  let fixture: ComponentFixture<DetailUserTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUserTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
