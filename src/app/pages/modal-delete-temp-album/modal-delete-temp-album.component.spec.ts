import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteAlbumComponent } from './modal-delete-temp-album.component';

describe('ModalDeleteAlbumComponent', () => {
  let component: ModalDeleteAlbumComponent;
  let fixture: ComponentFixture<ModalDeleteAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
