import { ModalCropImageModule } from './modal-crop-image.module';

describe('ModalCropImageModule', () => {
  let modalCropImageModule: ModalCropImageModule;

  beforeEach(() => {
    modalCropImageModule = new ModalCropImageModule();
  });

  it('should create an instance', () => {
    expect(modalCropImageModule).toBeTruthy();
  });
});
