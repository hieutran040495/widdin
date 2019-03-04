import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMasterTemplate02Component } from './header.component';

describe('HeaderMasterTemplate02Component', () => {
  let component: HeaderMasterTemplate02Component;
  let fixture: ComponentFixture<HeaderMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
