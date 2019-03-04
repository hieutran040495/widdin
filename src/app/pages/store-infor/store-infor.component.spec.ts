import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInforComponent } from './store-infor.component';

describe('StoreInforComponent', () => {
  let component: StoreInforComponent;
  let fixture: ComponentFixture<StoreInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
