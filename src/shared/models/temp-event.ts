import { BaseModel } from './base';

import * as pickBy from 'lodash/pickBy';
import * as moment from 'moment';

export class TemplateEvent extends BaseModel {

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  private _start_date: string;
  public get start_date(): string {
    return this._start_date;
  }
  public set start_date(v: string) {
    this._start_date = v;
  }

  private _start_date_picker: Date;
  public get start_date_picker(): Date {
    return this._start_date_picker;
  }
  public set start_date_picker(v: Date) {
    this._start_date_picker = v;
  }

  public get start_date_time(): string {
    if (this.start_date && this.start_hours) {
      return `${this.start_date} ${this.start_hours}`;
    }
  }
  public get start_date_string(): any {
    return moment(this.start_date).format('DD/MM/YYYY');
  }
  public get start_date_string_short(): string {
    if (this.start_date) {
      return moment(this.start_date)
      // .locale('vi')
      .format('LL');
    }
  }
  public get start_year(): number {
    return +moment(this.start_date, 'YYYY-MM-DD').format('Y');
  }
  public get start_month(): number {
    return +moment(this.start_date, 'YYYY-MM-DD').format('M');
  }
  public get start_day(): number {
    return +moment(this.start_date, 'YYYY-MM-DD').format('D');
  }

  private _start_hours: string;
  public get start_hours(): string {
    return this._start_hours;
  }
  public set start_hours(v: string) {
    this._start_hours = v;
  }
  public get during_time(): string {
    return `${this.start_hours} ~ ${this.end_hours}`;
  }

  private _end_hours: string;
  public get end_hours(): string {
    return this._end_hours;
  }
  public set end_hours(v: string) {
    this._end_hours = v;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }

  private _address: string;
  public get address(): string {
    return this._address;
  }
  public set address(v: string) {
    this._address = v;
  }

  private _address_name: string;
  public get address_name(): string {
    return this._address_name;
  }
  public set address_name(v: string) {
    this._address_name = v;
  }

  private _is_main: number;
  public get is_main(): number {
    return this._is_main;
  }
  public set is_main(v: number) {
    this._is_main = v;
  }
  public get is_main_boolean(): boolean {
    return !!this.is_main;
  }

  // private _is_main_boolean : boolean;
  // public get is_main_boolean() : boolean {
  //   return this._is_main_boolean;
  // }
  // public set is_main_boolean(v : boolean) {
  //   this._is_main_boolean = v;
  // }

  private _lat: number;
  public get lat(): number {
    return this._lat;
  }
  public set lat(v: number) {
    this._lat = v;
  }

  private _lng: number;
  public get lng(): number {
    return this._lng;
  }
  public set lng(v: number) {
    this._lng = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.title           = data.title;
      this.start_date      = data.start_date;
      this.start_hours     = moment(data.start_hours, 'HH:mm:ss').format('HH:mm');
      this.end_hours       = moment(data.end_hours, 'HH:mm:ss').format('HH:mm');
      this.description     = data.description;
      this.address         = data.address;
      this.address_name    = data.address_name;
      this.lat             = data.lat;
      this.lng             = data.lng;
      this.is_main         = data.is_main;
    }
  }

  public toJSON() {
    return pickBy(this, (value, key) => {
      return [
        'title',
        'start_date',
        'start_hours',
        'end_hours',
        'description',
        'address',
        'address_name',
        'is_main',
      ].indexOf(key) >= 0
      && value;
    });
  }

  public formData() {
    this.start_date = moment(this.start_date_picker).format('YYYY-MM-DD');

    const data = {
      ...this.toJSON(),
    };

    if (this.id) {
      data.id = this.id;
    }
    return data;
  }
}
