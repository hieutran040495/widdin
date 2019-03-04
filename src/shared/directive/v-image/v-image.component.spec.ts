import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VImageComponent } from './v-image.component';

describe('VImageComponent', () => {
  let component: VImageComponent;
  let fixture: ComponentFixture<VImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
