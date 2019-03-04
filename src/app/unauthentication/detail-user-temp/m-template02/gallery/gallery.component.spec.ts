import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasterTemplate02Component } from './gallery.component';

describe('GalleryMasterTemplate02Component', () => {
  let component: GalleryMasterTemplate02Component;
  let fixture: ComponentFixture<GalleryMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
