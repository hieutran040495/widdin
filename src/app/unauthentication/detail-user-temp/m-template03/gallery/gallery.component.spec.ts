import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasterTemplate03Component } from './gallery.component';

describe('GalleryMasterTemplate03Component', () => {
  let component: GalleryMasterTemplate03Component;
  let fixture: ComponentFixture<GalleryMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
