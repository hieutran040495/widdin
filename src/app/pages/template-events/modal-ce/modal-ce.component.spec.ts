import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCeTempEventComponent } from './modal-ce.component';

describe('ModalCeTempEventComponent', () => {
  let component: ModalCeTempEventComponent;
  let fixture: ComponentFixture<ModalCeTempEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCeTempEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCeTempEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
