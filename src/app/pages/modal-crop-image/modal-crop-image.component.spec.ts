import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCropImageComponent } from './modal-crop-image.component';

describe('ModalCropImageComponent', () => {
  let component: ModalCropImageComponent;
  let fixture: ComponentFixture<ModalCropImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCropImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCropImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
