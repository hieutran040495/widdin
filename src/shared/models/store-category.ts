import { BaseModel } from './base';
import * as pickBy from 'lodash/pickBy';

export class StoreCategory extends BaseModel {

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.name = data.name;
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
}
