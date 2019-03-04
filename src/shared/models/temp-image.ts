import { BaseModel } from './base';
import { IMG_PATH } from '../../shared/enums/img-path';
import { domain } from '../../shared/constants/img-domain';

export class TemplateImage extends BaseModel {

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  public get name_string(): string {
    return this.name ? this.name : 'Ảnh không tên';
  }

  private _user_album_id: number;
  public get user_album_id(): number {
    return this._user_album_id;
  }
  public set user_album_id(v: number) {
    this._user_album_id = v;
  }

  private _m_template_id: number;
  public get m_template_id(): number {
    return this._m_template_id;
  }
  public set m_template_id(v: number) {
    this._m_template_id = v;
  }

  private _created_at: string;
  public get created_at(): string {
    return this._created_at;
  }
  public set created_at(v: string) {
    this._created_at = v;
  }

  private _image: string;
  public get image(): string {
    return this._image;
  }
  public set image(v: string) {
    this._image = v;
  }
  public get img_url_sm(): string {
    return this.image ? `${domain}${IMG_PATH.THUMBNAILS}${this.image}` : '';
  }
  public get img_url_lg(): string {
    return this.image ? `${domain}${IMG_PATH.FULL_SIZE}${this.image}` : '';
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.image         = data.image;
      this.name          = data.name;
      this.user_album_id = data.user_album_id;
      this.m_template_id = data.m_template_id;
    }
  }
}
