import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticationComponent } from './unauthentication.component';

describe('UnauthenticationComponent', () => {
  let component: UnauthenticationComponent;
  let fixture: ComponentFixture<UnauthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
