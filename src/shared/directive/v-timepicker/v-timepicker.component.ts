import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-v-timepicker',
  templateUrl: './v-timepicker.component.html',
  styleUrls: ['./v-timepicker.component.scss']
})
export class VTimepickerComponent implements OnInit, AfterViewInit {
  @Output()
  changeValue: EventEmitter<any> = new EventEmitter<any>();

  public timeInput: any;
  public timeTableElement: any;

  private _id: string;
  @Input('id')
  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }

  private _timeOrigin: any;
  @Input('timeOrigin')
  public get timeOrigin(): any {
    return this._timeOrigin;
  }
  public set timeOrigin(v: any) {
    this._timeOrigin = v;
  }

  constructor() {}

  ngOnInit() {
    if (this.timeOrigin) {
      this.timeInput =  this.timeOrigin;
      this.timeOrigin =  new Date(this._initFullDate(this.timeOrigin));
    } else {
      this.timeInput =  moment().format('HH:mm');
      this.timeOrigin =  new Date(this._initFullDate());
    }
  }

  ngAfterViewInit() {
    if (this.id) {
      this.timeTableElement = $(`#${this.id} .v-timepicker__table`);
      this._closeOutside();
    }
  }

  private _initFullDate(time?: string) {
    if (time) {
      const date = moment().format('YYYY-MM-DD');
      const dateTime = `${date} ${time}`;
      return dateTime;
    } else {
      return moment().format('YYYY-MM-DD HH:mm');
    }
  }

  public changePicker(e: any) {
    const inputElement = $(`#${this.id} .v-timepicker__input`);
    const timeFormat = moment(e).format('HH:mm');
    inputElement.val(timeFormat);
    this.changeValue.emit(timeFormat);
  }

  public openTimePicker() {
    if (!this.id) {
      return;
    }
    this.timeTableElement.removeClass('hidden');
  }

  private _closeOutside() {
    const _$ = this;

    $(document).mouseup(function (e) {
      if (!_$.timeTableElement.is(e.target) && _$.timeTableElement.has(e.target).length === 0) {
        _$.timeTableElement.addClass('hidden');
      }
    });
  }
}
