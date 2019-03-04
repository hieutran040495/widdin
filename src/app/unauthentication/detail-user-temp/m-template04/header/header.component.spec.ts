import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMasterTemplate04Component } from './header.component';

describe('HeaderMasterTemplate04Component', () => {
  let component: HeaderMasterTemplate04Component;
  let fixture: ComponentFixture<HeaderMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
