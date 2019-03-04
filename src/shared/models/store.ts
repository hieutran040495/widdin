import { BaseModel } from './base';
import * as pickBy from 'lodash/pickBy';

import { StoreCategory } from './store-category';

export class Store extends BaseModel {

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _category: StoreCategory;
  public get category(): StoreCategory {
    return this._category;
  }
  public set category(v: StoreCategory) {
    this._category = v;
  }

  private _img_url: string;
  public get img_url(): string {
    return this._img_url;
  }
  public set img_url(v: string) {
    this._img_url = v;
  }

  constructor (data?: any) {
    super(data);
    this.category = new StoreCategory();

    if (data) {
      this.name = data.name;
      this.img_url = data.img_url;
      this.category = new StoreCategory(data.name);
    }
  }

  public toJSON() {
    return pickBy(this, (value, key) => {
      return [
        'name',
      ].indexOf(key) >= 0
      && value;
    });
  }

  public formData() {
    const data = {
      ...this.toJSON(),
    };

    if (this.id) {
      data.id = this.id;
    }
    return data;
  }
}
