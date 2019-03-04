import { TemplateCoupleInfoModule } from './template-couple-info.module';

describe('TemplateCoupleInfoModule', () => {
  let templateCoupleInfoModule: TemplateCoupleInfoModule;

  beforeEach(() => {
    templateCoupleInfoModule = new TemplateCoupleInfoModule();
  });

  it('should create an instance', () => {
    expect(templateCoupleInfoModule).toBeTruthy();
  });
});
