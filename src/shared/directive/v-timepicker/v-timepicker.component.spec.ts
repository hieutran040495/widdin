import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTimepickerComponent } from './v-timepicker.component';

describe('VTimepickerComponent', () => {
  let component: VTimepickerComponent;
  let fixture: ComponentFixture<VTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
