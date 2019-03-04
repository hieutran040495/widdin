import { TemplateInvitationModule } from './template-invitation.module';

describe('TemplateInvitationModule', () => {
  let templateInvitationModule: TemplateInvitationModule;

  beforeEach(() => {
    templateInvitationModule = new TemplateInvitationModule();
  });

  it('should create an instance', () => {
    expect(templateInvitationModule).toBeTruthy();
  });
});
