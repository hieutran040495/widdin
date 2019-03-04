import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPreviewGalleryComponent } from './v-preview-gallery.component';

describe('VPreviewGalleryComponent', () => {
  let component: VPreviewGalleryComponent;
  let fixture: ComponentFixture<VPreviewGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPreviewGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPreviewGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
