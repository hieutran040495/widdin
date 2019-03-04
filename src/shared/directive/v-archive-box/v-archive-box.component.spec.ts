import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VArchiveBoxComponent } from './v-archive-box.component';

describe('VArchiveBoxComponent', () => {
  let component: VArchiveBoxComponent;
  let fixture: ComponentFixture<VArchiveBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VArchiveBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VArchiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
