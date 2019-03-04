import { MtCountDownModule } from './mt-count-down.module';

describe('MtCountDownModule', () => {
  let mtCountDownModule: MtCountDownModule;

  beforeEach(() => {
    mtCountDownModule = new MtCountDownModule();
  });

  it('should create an instance', () => {
    expect(mtCountDownModule).toBeTruthy();
  });
});
