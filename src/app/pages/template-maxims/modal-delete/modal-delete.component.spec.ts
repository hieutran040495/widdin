import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteMaximsComponent } from './modal-delete.component';

describe('ModalDeleteMaximsComponent', () => {
  let component: ModalDeleteMaximsComponent;
  let fixture: ComponentFixture<ModalDeleteMaximsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteMaximsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteMaximsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
