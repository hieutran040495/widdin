import { BaseModel } from './base';

export class TemplateBackground extends BaseModel {

  private _image: string;
  public get image(): string {
    return this._image;
  }
  public set image(v: string) {
    this._image = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.image = data.image;
    }
  }
}
