import { BaseModel } from './base';

export class TemplateMusic extends BaseModel {

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _author: string;
  public get author(): string {
    return this._author;
  }
  public set author(v: string) {
    this._author = v;
  }

  private _path: string;
  public get path(): string {
    return this._path;
  }
  public set path(v: string) {
    this._path = v;
  }

  private _img_url: string;
  public get img_url(): string {
    return this._img_url;
  }
  public set img_url(v: string) {
    this._img_url = v;
  }

  private _active: boolean;
  public get active(): boolean {
    return this._active;
  }
  public set active(v: boolean) {
    this._active = v;
  }

  private _time: string;
  public get time(): string {
    return this._time;
  }
  public set time(v: string) {
    this._time = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.name    = data.name;
      this.author  = data.author;
      this.path    = data.path;
      this.img_url = data.img_url;
      this.active  = data.active;
      this.time    = data.time;
    }
  }
}
