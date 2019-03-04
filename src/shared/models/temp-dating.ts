import { BaseModel } from './base';

export class TemplateDating extends BaseModel {

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
      this.start_date = data.start_date;
      this.start_time = data.start_time;
      this.memo       = data.memo;
    }
  }
}
