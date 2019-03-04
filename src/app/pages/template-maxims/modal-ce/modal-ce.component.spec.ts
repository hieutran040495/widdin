import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCeTempMaximsComponent } from './modal-ce.component';

describe('ModalCeTempMaximsComponent', () => {
  let component: ModalCeTempMaximsComponent;
  let fixture: ComponentFixture<ModalCeTempMaximsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCeTempMaximsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCeTempMaximsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
