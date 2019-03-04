import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAlbumEditComponent } from './template-album-edit.component';

describe('TemplateAlbumEditComponent', () => {
  let component: TemplateAlbumEditComponent;
  let fixture: ComponentFixture<TemplateAlbumEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAlbumEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAlbumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
