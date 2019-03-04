import { TemplateAlbumModule } from './template-album.module';

describe('TemplateAlbumModule', () => {
  let templateAlbumModule: TemplateAlbumModule;

  beforeEach(() => {
    templateAlbumModule = new TemplateAlbumModule();
  });

  it('should create an instance', () => {
    expect(templateAlbumModule).toBeTruthy();
  });
});
