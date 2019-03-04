import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMasterTemplate03Component } from './footer.component';

describe('FooterMasterTemplate03Component', () => {
  let component: FooterMasterTemplate03Component;
  let fixture: ComponentFixture<FooterMasterTemplate03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMasterTemplate03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMasterTemplate03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
