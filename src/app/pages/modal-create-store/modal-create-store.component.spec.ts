import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateStoreComponent } from './modal-create-store.component';

describe('ModalCreateStoreComponent', () => {
  let component: ModalCreateStoreComponent;
  let fixture: ComponentFixture<ModalCreateStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
