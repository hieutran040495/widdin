import { BaseModel } from './base';

export class TemplateMaxim extends BaseModel {

  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(v: string) {
    this._content = v;
  }

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  constructor (data?: any) {
    super(data);

    if (data) {
      this.content = data.content;
      this.title   = data.title;
    }
  }

  public toJSONString() {
    return {
      content: this.content,
    };
  }

  public editData() {
    return {
      ...this.toJSONString(),
      id: this.id,
    };
  }
}
