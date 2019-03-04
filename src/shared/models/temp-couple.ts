import { BaseModel } from './base';
import * as pickBy from 'lodash/pickBy';

import { IMG_PATH } from '../../shared/enums/img-path';
import { domain } from '../../shared/constants/img-domain';

export class TemplateCouple extends BaseModel {

  private _user_id: number;
  public get user_id(): number {
    return this._user_id;
  }
  public set user_id(v: number) {
    this._user_id = v;
  }

  private _name_first_person: string;
  public get name_first_person(): string {
    return this._name_first_person;
  }
  public set name_first_person(v: string) {
    this._name_first_person = v;
  }
  public get first_name_per_1(): string {
    if (this.name_first_person) {
      const arr = this.name_first_person.split(' ');
      const index = arr.length - 1;
      return arr[index];
    }
  }

  private _description_first_person: string;
  public get description_first_person(): string {
    return this._description_first_person;
  }
  public set description_first_person(v: string) {
    this._description_first_person = v;
  }

  private _fb_first_person: string;
  public get fb_first_person(): string {
    return this._fb_first_person;
  }
  public set fb_first_person(v: string) {
    this._fb_first_person = v;
  }

  private _twitter_first_person: string;
  public get twitter_first_person(): string {
    return this._twitter_first_person;
  }
  public set twitter_first_person(v: string) {
    this._twitter_first_person = v;
  }

  private _instagram_first_person: string;
  public get instagram_first_person(): string {
    return this._instagram_first_person;
  }
  public set instagram_first_person(v: string) {
    this._instagram_first_person = v;
  }

  private _image_first_person: string;
  public get image_first_person(): string {
    return this._image_first_person;
  }
  public set image_first_person(v: string) {
    this._image_first_person = v;
  }
  public get img_url_first_person_sm(): string {
    return `${domain}${IMG_PATH.THUMBNAILS}${this.image_first_person}`;
  }
  public get img_url_first_person_lg(): string {
    return `${domain}${IMG_PATH.FULL_SIZE}${this.image_first_person}`;
  }

  private _name_second_person: string;
  public get name_second_person(): string {
    return this._name_second_person;
  }
  public set name_second_person(v: string) {
    this._name_second_person = v;
  }
  public get first_name_per_2(): string {
    if (this.name_second_person) {
      const arr = this.name_second_person.split(' ');
      const index = arr.length - 1;
      return arr[index];
    }
  }

  private _description_second_person: string;
  public get description_second_person(): string {
    return this._description_second_person;
  }
  public set description_second_person(v: string) {
    this._description_second_person = v;
  }

  private _fb_second_person: string;
  public get fb_second_person(): string {
    return this._fb_second_person;
  }
  public set fb_second_person(v: string) {
    this._fb_second_person = v;
  }

  private _twitter_second_person: string;
  public get twitter_second_person(): string {
    return this._twitter_second_person;
  }
  public set twitter_second_person(v: string) {
    this._twitter_second_person = v;
  }

  private _instagram_second_person: string;
  public get instagram_second_person(): string {
    return this._instagram_second_person;
  }
  public set instagram_second_person(v: string) {
    this._instagram_second_person = v;
  }

  private _image_second_person: string;
  public get image_second_person(): string {
    return this._image_second_person;
  }
  public set image_second_person(v: string) {
    this._image_second_person = v;
  }
  public get img_url_second_person_sm(): string {
    return `${domain}${IMG_PATH.THUMBNAILS}${this.image_second_person}`;
  }
  public get img_url_second_person_lg(): string {
    return `${domain}${IMG_PATH.FULL_SIZE}${this.image_second_person}`;
  }

  private _image: string;
  public get image(): string {
    return this._image;
  }
  public set image(v: string) {
    this._image = v;
  }
  public get img_url_sm(): string {
    return `${domain}${IMG_PATH.THUMBNAILS}${this.image}`;
  }
  public get img_url_lg(): string {
    return `${domain}${IMG_PATH.FULL_SIZE}${this.image}`;
  }

  private _created_at: string;
  public get created_at(): string {
    return this._created_at;
  }
  public set created_at(v: string) {
    this._created_at = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.user_id                   = data.user_id;
      this.name_first_person         = data.name_first_person;
      this.description_first_person  = data.description_first_person;
      this.fb_first_person           = data.fb_first_person;
      this.twitter_first_person      = data.twitter_first_person;
      this.instagram_first_person    = data.instagram_first_person;
      this.image_first_person        = data.image_first_person;
      this.name_second_person        = data.name_second_person;
      this.description_second_person = data.description_second_person;
      this.fb_second_person          = data.fb_second_person;
      this.twitter_second_person     = data.twitter_second_person;
      this.instagram_second_person   = data.instagram_second_person;
      this.image_second_person       = data.image_second_person;
      this.image                     = data.image;
    }
  }

  public toJSON() {
    return pickBy(this, (value, key) => {
      return [
        'name_first_person',
        'description_first_person',
        'fb_first_person',
        'twitter_first_person',
        'instagram_first_person',
        'name_second_person',
        'description_second_person',
        'fb_second_person',
        'twitter_second_person',
        'instagram_second_person',
      ].indexOf(key) >= 0
      && value;
    });
  }
}
