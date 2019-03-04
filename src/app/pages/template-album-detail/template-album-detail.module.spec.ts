import { TemplateAlbumDetailModule } from './template-album-detail.module';

describe('TemplateAlbumDetailModule', () => {
  let templateAlbumDetailModule: TemplateAlbumDetailModule;

  beforeEach(() => {
    templateAlbumDetailModule = new TemplateAlbumDetailModule();
  });

  it('should create an instance', () => {
    expect(templateAlbumDetailModule).toBeTruthy();
  });
});
