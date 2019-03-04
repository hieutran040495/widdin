import { BaseModel } from './base';

import { TemplateCouple } from './temp-couple';
import { TemplateMaxim } from './temp-maxim';
import { TemplateEvent } from './temp-event';
import { TemplateStory } from './temp-story';
import { TemplateAlbum } from './temp-album';
import { TemplateBackground } from './temp-background';

export class UserTemplateInfo extends BaseModel {

  private _couple: TemplateCouple;
  public get couple(): TemplateCouple {
    return this._couple;
  }
  public set couple(v: TemplateCouple) {
    this._couple = v;
  }

  private _events: TemplateEvent[];
  public get events(): TemplateEvent[] {
    return this._events;
  }
  public set events(v: TemplateEvent[]) {
    this._events = v;
  }
  public get main_event(): TemplateEvent {
    if (this.events && this.events.length > 0) {
      const mainEvent = this.events.filter(item => +item.is_main === 1);
      return new TemplateEvent(mainEvent[0]);
    } else {
      return new TemplateEvent();
    }
  }

  private _maxims: TemplateMaxim[];
  public get maxims(): TemplateMaxim[] {
    return this._maxims;
  }
  public set maxims(v: TemplateMaxim[]) {
    this._maxims = v;
  }

  private _stories: TemplateStory[];
  public get stories(): TemplateStory[] {
    return this._stories;
  }
  public set stories(v: TemplateStory[]) {
    this._stories = v;
  }

  private _albums: TemplateAlbum[];
  public get albums(): TemplateAlbum[] {
    return this._albums;
  }
  public set albums(v: TemplateAlbum[]) {
    this._albums = v;
  }

  private _backgrounds: TemplateBackground[];
  public get backgrounds(): TemplateBackground[] {
    return this._backgrounds;
  }
  public set backgrounds(v: TemplateBackground[]) {
    this._backgrounds = v;
  }

  constructor (data?: any) {
    super(data);
    this.couple      = new TemplateCouple();
    this.events      = [];
    this.maxims      = [];
    this.stories     = [];
    this.albums      = [];
    this.backgrounds = [];

    if (data) {
      if (data.couple) {
        this.couple = new TemplateCouple(data.couple);
      }
      if (data.events && data.events.length > 0) {
        data.events.map(item => {
          this.events.push(new TemplateEvent(item));
        });
      }
      if (data.maxims && data.maxims.length > 0) {
        data.maxims.map(item => {
          this.maxims.push(new TemplateMaxim(item));
        });
      }
      if (data.stories && data.stories.length > 0) {
        data.stories.map(item => {
          this.stories.push(new TemplateStory(item));
        });
      }
      if (data.albums && data.albums.length > 0) {
        data.albums.map(item => {
          this.albums.push(new TemplateAlbum(item));
        });
      }
      if (data.backgrounds && data.backgrounds.length > 0) {
        data.backgrounds.map(item => {
          this.backgrounds.push(new TemplateBackground(item));
        });
      }
    }
  }
}
