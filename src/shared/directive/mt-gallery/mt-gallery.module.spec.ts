import { MtGalleryModule } from './mt-gallery.module';

describe('MtGalleryModule', () => {
  let mtGalleryModule: MtGalleryModule;

  beforeEach(() => {
    mtGalleryModule = new MtGalleryModule();
  });

  it('should create an instance', () => {
    expect(mtGalleryModule).toBeTruthy();
  });
});
