import { ModalUploadImageModule } from './modal-upload-image.module';

describe('ModalUploadImageModule', () => {
  let modalUploadImageModule: ModalUploadImageModule;

  beforeEach(() => {
    modalUploadImageModule = new ModalUploadImageModule();
  });

  it('should create an instance', () => {
    expect(modalUploadImageModule).toBeTruthy();
  });
});
