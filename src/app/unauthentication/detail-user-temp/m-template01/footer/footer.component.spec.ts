import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMasterTemplate01Component } from './footer.component';

describe('FooterMasterTemplate01Component', () => {
  let component: FooterMasterTemplate01Component;
  let fixture: ComponentFixture<FooterMasterTemplate01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMasterTemplate01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMasterTemplate01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
