import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMasterTemplate01Component } from './header.component';

describe('HeaderMasterTemplate01Component', () => {
  let component: HeaderMasterTemplate01Component;
  let fixture: ComponentFixture<HeaderMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
