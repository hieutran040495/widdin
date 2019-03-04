import { TemplateMaximsModule } from './template-maxims.module';

describe('TemplateMaximsModule', () => {
  let templateMaximsModule: TemplateMaximsModule;

  beforeEach(() => {
    templateMaximsModule = new TemplateMaximsModule();
  });

  it('should create an instance', () => {
    expect(templateMaximsModule).toBeTruthy();
  });
});
