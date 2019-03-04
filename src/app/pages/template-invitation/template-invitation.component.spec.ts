import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInvitationComponent } from './template-invitation.component';

describe('TemplateInvitationComponent', () => {
  let component: TemplateInvitationComponent;
  let fixture: ComponentFixture<TemplateInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
