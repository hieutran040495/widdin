import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTemplatesComponent } from './manager-templates.component';

describe('ManagerTemplatesComponent', () => {
  let component: ManagerTemplatesComponent;
  let fixture: ComponentFixture<ManagerTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
