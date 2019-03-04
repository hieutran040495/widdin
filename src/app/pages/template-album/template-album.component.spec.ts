import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAlbumComponent } from './template-album.component';

describe('TemplateAlbumComponent', () => {
  let component: TemplateAlbumComponent;
  let fixture: ComponentFixture<TemplateAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
