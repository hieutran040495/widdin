import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMusicComponent } from './template-music.component';

describe('TemplateMusicComponent', () => {
  let component: TemplateMusicComponent;
  let fixture: ComponentFixture<TemplateMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
