import * as pickBy from 'lodash/pickBy';

import { BaseModel } from './base';
import { TemplateImage } from './temp-image';

export class TemplateAlbum extends BaseModel {

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }

  private _order: number;
  public get order(): number {
    return this._order;
  }
  public set order(v: number) {
    this._order = v;
  }

  private _images: TemplateImage[];
  public get images(): TemplateImage[] {
    return this._images;
  }
  public set images(v: TemplateImage[]) {
    this._images = v;
  }
  public get image_cover(): string {
    if (!!this.images && !!this.images.length) {
      const img_cover = this.images[0];
      return img_cover.img_url_sm;
    }
  }

  constructor (data?: any) {
    super(data);
    this.images = [];

    if (data) {
      this.title       = data.title;
      this.description = data.description;
      this.order       = data.order;

      if (data.images && data.images.length > 0) {
        this.images = [];
        data.images.map(item => {
          this.images.push(new TemplateImage(item));
        });
      }
    }
  }

  public toJSON() {
    return pickBy(this, (value, key) => {
      return [
        'title',
        'description',
      ].indexOf(key) >= 0
      && value;
    });
  }

  public formDataJSON() {
    return {
      ...this.toJSON(),
      id: this.id,
    };
  }
}
