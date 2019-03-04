import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEventComponent } from './modal-delete.component';

describe('ModalDeleteEventComponent', () => {
  let component: ModalDeleteEventComponent;
  let fixture: ComponentFixture<ModalDeleteEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
