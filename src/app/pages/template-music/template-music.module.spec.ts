import { TemplateMusicModule } from './template-music.module';

describe('TemplateMusicModule', () => {
  let templateMusicModule: TemplateMusicModule;

  beforeEach(() => {
    templateMusicModule = new TemplateMusicModule();
  });

  it('should create an instance', () => {
    expect(templateMusicModule).toBeTruthy();
  });
});
