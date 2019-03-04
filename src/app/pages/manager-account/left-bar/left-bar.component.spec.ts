import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAccountLeftBarComponent } from './left-bar.component';

describe('ManagerAccountLeftBarComponent', () => {
  let component: ManagerAccountLeftBarComponent;
  let fixture: ComponentFixture<ManagerAccountLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAccountLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAccountLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
