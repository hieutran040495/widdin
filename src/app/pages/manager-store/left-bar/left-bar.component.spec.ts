import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStoreLeftBarComponent } from './left-bar.component';

describe('ManagerStoreLeftBarComponent', () => {
  let component: ManagerStoreLeftBarComponent;
  let fixture: ComponentFixture<ManagerStoreLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerStoreLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStoreLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
