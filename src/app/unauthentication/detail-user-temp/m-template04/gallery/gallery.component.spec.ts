import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasterTemplate04Component } from './gallery.component';

describe('GalleryMasterTemplate04Component', () => {
  let component: GalleryMasterTemplate04Component;
  let fixture: ComponentFixture<GalleryMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
