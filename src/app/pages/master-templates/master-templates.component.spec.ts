import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTemplatesComponent } from './master-templates.component';

describe('MasterTemplatesComponent', () => {
  let component: MasterTemplatesComponent;
  let fixture: ComponentFixture<MasterTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
