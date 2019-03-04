import { VImageModule } from './v-image.module';

describe('VImageModule', () => {
  let vImageModule: VImageModule;

  beforeEach(() => {
    vImageModule = new VImageModule();
  });

  it('should create an instance', () => {
    expect(vImageModule).toBeTruthy();
  });
});
