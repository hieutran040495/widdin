import { TemplateEventsModule } from './template-events.module';

describe('TemplateEventsModule', () => {
  let templateEventsModule: TemplateEventsModule;

  beforeEach(() => {
    templateEventsModule = new TemplateEventsModule();
  });

  it('should create an instance', () => {
    expect(templateEventsModule).toBeTruthy();
  });
});
