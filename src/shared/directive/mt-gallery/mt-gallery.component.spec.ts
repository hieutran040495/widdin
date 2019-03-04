import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtGalleryComponent } from './mt-gallery.component';

describe('MtGalleryComponent', () => {
  let component: MtGalleryComponent;
  let fixture: ComponentFixture<MtGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
