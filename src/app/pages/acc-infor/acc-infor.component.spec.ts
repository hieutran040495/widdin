import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInforComponent } from './acc-infor.component';

describe('AccountInforComponent', () => {
  let component: AccountInforComponent;
  let fixture: ComponentFixture<AccountInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
