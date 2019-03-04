import { TemplateRSVPModule } from './template-rsvp.module';

describe('TemplateRsvpModule', () => {
  let templateRsvpModule: TemplateRSVPModule;

  beforeEach(() => {
    templateRsvpModule = new TemplateRSVPModule();
  });

  it('should create an instance', () => {
    expect(templateRsvpModule).toBeTruthy();
  });
});
