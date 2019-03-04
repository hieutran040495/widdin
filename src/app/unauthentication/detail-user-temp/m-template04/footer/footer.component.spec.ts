import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMasterTemplate04Component } from './footer.component';

describe('FooterMasterTemplate04Component', () => {
  let component: FooterMasterTemplate04Component;
  let fixture: ComponentFixture<FooterMasterTemplate04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMasterTemplate04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMasterTemplate04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
