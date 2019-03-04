import { TemplateStoriesModule } from './template-stories.module';

describe('TemplateStoriesModule', () => {
  let templateStoriesModule: TemplateStoriesModule;

  beforeEach(() => {
    templateStoriesModule = new TemplateStoriesModule();
  });

  it('should create an instance', () => {
    expect(templateStoriesModule).toBeTruthy();
  });
});
