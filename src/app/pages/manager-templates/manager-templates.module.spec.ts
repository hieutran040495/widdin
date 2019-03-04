import { ManagerTemplatesModule } from './manager-templates.module';

describe('ManagerTemplatesModule', () => {
  let managerTemplatesModule: ManagerTemplatesModule;

  beforeEach(() => {
    managerTemplatesModule = new ManagerTemplatesModule();
  });

  it('should create an instance', () => {
    expect(managerTemplatesModule).toBeTruthy();
  });
});
