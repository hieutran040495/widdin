import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCeTempStoryComponent } from './modal-ce.component';

describe('ModalCeTempStoryComponent', () => {
  let component: ModalCeTempStoryComponent;
  let fixture: ComponentFixture<ModalCeTempStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCeTempStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCeTempStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
