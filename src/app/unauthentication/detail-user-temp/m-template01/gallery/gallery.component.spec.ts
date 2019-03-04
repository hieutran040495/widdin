import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasterTemplate01Component } from './gallery.component';

describe('GalleryMasterTemplate01Component', () => {
  let component: GalleryMasterTemplate01Component;
  let fixture: ComponentFixture<GalleryMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
