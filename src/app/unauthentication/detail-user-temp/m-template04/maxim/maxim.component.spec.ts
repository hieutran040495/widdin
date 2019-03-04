import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximMasterTemplate04ComponentComponent } from './maxim.component';

describe('MaximMasterTemplate04ComponentComponent', () => {
  let component: MaximMasterTemplate04ComponentComponent;
  let fixture: ComponentFixture<MaximMasterTemplate04ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximMasterTemplate04ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximMasterTemplate04ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
