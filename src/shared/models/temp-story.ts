import { BaseModel } from './base';
import * as moment from 'moment';

export class TemplateStory extends BaseModel {

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
  public get start_date_string(): any {
    return moment(this.start_date).format('DD/MM/YYYY');
  }

  private _start_date_picker: Date;
  public get start_date_picker(): Date {
    return this._start_date_picker;
  }
  public set start_date_picker(v: Date) {
    this._start_date_picker = v;
  }

  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(v: string) {
    this._content = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.start_date = data.start_date;
      this.title      = data.title;
      this.content    = data.content;
    }
  }

  public toJSONString() {
    this.start_date = moment(this.start_date_picker).format('YYYY-MM-DD');

    return {
      start_date: this.start_date,
      title     : this.title,
      content   : this.content,
    };
  }

  public editData() {
    return {
      ...this.toJSONString(),
      id: this.id,
    };
  }
}
