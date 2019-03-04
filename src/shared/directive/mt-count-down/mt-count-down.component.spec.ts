import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCountDownComponent } from './mt-count-down.component';

describe('MtCountDownComponent', () => {
  let component: MtCountDownComponent;
  let fixture: ComponentFixture<MtCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtCountDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
