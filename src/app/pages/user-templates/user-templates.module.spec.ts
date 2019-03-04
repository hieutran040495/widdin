import { UserTemplatesModule } from './user-templates.module';

describe('UserTemplatesModule', () => {
  let userTemplatesModule: UserTemplatesModule;

  beforeEach(() => {
    userTemplatesModule = new UserTemplatesModule();
  });

  it('should create an instance', () => {
    expect(userTemplatesModule).toBeTruthy();
  });
});
