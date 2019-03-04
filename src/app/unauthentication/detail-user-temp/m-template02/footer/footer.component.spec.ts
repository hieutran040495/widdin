import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMasterTemplate02Component } from './footer.component';

describe('FooterMasterTemplate02Component', () => {
  let component: FooterMasterTemplate02Component;
  let fixture: ComponentFixture<FooterMasterTemplate02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMasterTemplate02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMasterTemplate02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
