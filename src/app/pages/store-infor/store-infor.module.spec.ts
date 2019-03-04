import { StoreInforModule } from './store-infor.module';

describe('StoreInforModule', () => {
  let storeInforModule: StoreInforModule;

  beforeEach(() => {
    storeInforModule = new StoreInforModule();
  });

  it('should create an instance', () => {
    expect(storeInforModule).toBeTruthy();
  });
});
