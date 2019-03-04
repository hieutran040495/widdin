import { BaseModel } from './base';
import * as moment from 'moment';

export class TemplateInvitation extends BaseModel {

  private _address: string;
  public get address(): string {
    return this._address;
  }
  public set address(v: string) {
    this._address = v;
  }

  private _start_date: string;
  public get start_date(): string {
    return this._start_date;
  }
  public set start_date(v: string) {
    this._start_date = v;
  }

  private _start_time: string;
  public get start_time(): string {
    return this._start_time;
  }
  public set start_time(v: string) {
    this._start_time = v;
  }
  public get start_year(): number {
    return moment(this.start_date, 'YYYY-MM-DD').year();
  }
  public get start_month(): number {
    return moment(this.start_date, 'YYYY-MM-DD').month();
  }
  public get start_day(): number {
    return moment(this.start_date, 'YYYY-MM-DD').day();
  }
  private _memo: string;
  public get memo(): string {
    return this._memo;
  }
  public set memo(v: string) {
    this._memo = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.address    = data.address;
      this.start_date = data.start_date;
      this.start_time = data.start_time;
      this.memo       = data.memo;
    }
  }
}
