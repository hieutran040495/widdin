import { TemplateSlideModule } from './template-slide.module';

describe('TemplateSlideModule', () => {
  let templateSlideModule: TemplateSlideModule;

  beforeEach(() => {
    templateSlideModule = new TemplateSlideModule();
  });

  it('should create an instance', () => {
    expect(templateSlideModule).toBeTruthy();
  });
});
