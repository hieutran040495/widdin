import { TemplateDatingInfoModule } from './template-dating-info.module';

describe('TemplateDatingInfoModule', () => {
  let templateDatingInfoModule: TemplateDatingInfoModule;

  beforeEach(() => {
    templateDatingInfoModule = new TemplateDatingInfoModule();
  });

  it('should create an instance', () => {
    expect(templateDatingInfoModule).toBeTruthy();
  });
});
