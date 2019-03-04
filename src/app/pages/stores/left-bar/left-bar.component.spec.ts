import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresLeftBarComponent } from './left-bar.component';

describe('StoresLeftBarComponent', () => {
  let component: StoresLeftBarComponent;
  let fixture: ComponentFixture<StoresLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
