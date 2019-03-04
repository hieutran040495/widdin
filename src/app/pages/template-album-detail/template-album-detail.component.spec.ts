import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAlbumDetailComponent } from './template-album-detail.component';

describe('TemplateAlbumDetailComponent', () => {
  let component: TemplateAlbumDetailComponent;
  let fixture: ComponentFixture<TemplateAlbumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAlbumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
