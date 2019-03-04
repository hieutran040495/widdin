import { BaseModel } from './base';
import * as moment from 'moment';

import { MasterTemplate } from './m-template';

export class UserTemplate extends BaseModel {

  private _template: MasterTemplate;
  public get template(): MasterTemplate {
    return this._template;
  }
  public set template(v: MasterTemplate) {
    this._template = v;
  }

  private _is_active: boolean;
  public get is_active(): boolean {
    return this._is_active;
  }
  public set is_active(v: boolean) {
    this._is_active = v;
  }

  private _created_at: string;
  public get created_at(): string {
    return this._created_at;
  }
  public set created_at(v: string) {
    this._created_at = v;
  }
  public get created_at_date(): string {
    return this.created_at ? moment(this.created_at).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD');
  }

  constructor (data?: any) {
    super(data);
    this.template = new MasterTemplate();

    if (data) {
      this.created_at = data.created_at;
      this.is_active = data.is_active;

      if (data.template) {
        this.template = new MasterTemplate(data.template);
      }
    }
  }
}
