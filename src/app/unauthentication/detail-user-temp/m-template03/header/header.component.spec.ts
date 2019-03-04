import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMasterTemplate03Component } from './header.component';

describe('HeaderMasterTemplate03Component', () => {
  let component: HeaderMasterTemplate03Component;
  let fixture: ComponentFixture<HeaderMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
