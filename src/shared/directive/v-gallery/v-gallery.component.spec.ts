import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VGalleryComponent } from './v-gallery.component';

describe('VGalleryComponent', () => {
  let component: VGalleryComponent;
  let fixture: ComponentFixture<VGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
