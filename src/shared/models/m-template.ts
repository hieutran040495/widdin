import { BaseModel } from './base';
import { TemplateImage } from './temp-image';

export class MasterTemplate extends BaseModel {

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

  private _free: boolean;
  public get free(): boolean {
    return this._free;
  }
  public set free(v: boolean) {
    this._free = v;
  }

  private _price: number;
  public get price(): number {
    return this._price;
  }
  public set price(v: number) {
    this._price = v;
  }

  private _like: number;
  public get like(): number {
    return this._like;
  }
  public set like(v: number) {
    this._like = v;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _created_at: string;
  public get created_at(): string {
    return this._created_at;
  }
  public set created_at(v: string) {
    this._created_at = v;
  }

  private _slug: string;
  public get slug(): string {
    return this._slug;
  }
  public set slug(v: string) {
    this._slug = v;
  }

  constructor (data?: any) {
    super(data);
    this.images = [];

    if (data) {
      this.free       = data.free;
      this.price      = data.price;
      this.like       = data.like;
      this.name      = data.name;
      this.created_at = data.created_at;
      this.slug  = data.slug;

      if (data.images.length > 0) {
        data.images.map(item => {
          this.images.push(new TemplateImage(item));
        });
      }
    }
  }
}
