import { VGalleryModule } from './v-gallery.module';

describe('VGalleryModule', () => {
  let vGalleryModule: VGalleryModule;

  beforeEach(() => {
    vGalleryModule = new VGalleryModule();
  });

  it('should create an instance', () => {
    expect(vGalleryModule).toBeTruthy();
  });
});
