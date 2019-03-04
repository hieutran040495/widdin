import { BaseModel } from './base';
import { TemplateEvent } from './temp-event';

export class TemplateRSVP extends BaseModel {

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _phone: string;
  public get phone(): string {
    return this._phone;
  }
  public set phone(v: string) {
    this._phone = v;
  }

  private _guestes: number;
  public get guestes(): number {
    return this._guestes;
  }
  public set guestes(v: number) {
    this._guestes = v;
  }

  private _event: TemplateEvent;
  public get event(): TemplateEvent {
    return this._event;
  }
  public set event(v: TemplateEvent) {
    this._event = v;
  }

  private _message: string;
  public get message(): string {
    return this._message;
  }
  public set message(v: string) {
    this._message = v;
  }

  constructor (data?: any) {
    super(data);
    this.event   = new TemplateEvent();

    if (data) {
      this.name    = data.name;
      this.phone   = data.phone;
      this.guestes = data.guestes;
      this.message = data.message;
      this.event   = new TemplateEvent(data.event);
    }
  }
}
