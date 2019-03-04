import { UnauthenticationModule } from './unauthentication.module';

describe('UnauthenticationModule', () => {
  let unauthenticationModule: UnauthenticationModule;

  beforeEach(() => {
    unauthenticationModule = new UnauthenticationModule();
  });

  it('should create an instance', () => {
    expect(unauthenticationModule).toBeTruthy();
  });
});
