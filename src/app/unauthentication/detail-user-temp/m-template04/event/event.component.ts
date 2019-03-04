import { Component, OnInit, Input } from '@angular/core';

import { TemplateEvent } from 'src/shared/models/temp-event';

import { eventImgs } from '../../../../../shared/mock-data/temp-events';
import * as chunk from 'lodash/chunk';

@Component({
  selector: 'app-m-template04-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventMasterTemplate04Component implements OnInit {
  @Input('events') events: TemplateEvent[];
  public eventImgs = eventImgs;
  public mainEvent: TemplateEvent = new TemplateEvent();
  public newEvents = [];

  public icons = [
    {
      name: 'mt-event__icon fa fa-gift'
    },
    {
      name: 'mt-event__icon fa fa-bell-o'
    },
    {
      name: 'mt-event__icon fa fa-birthday-cake'
    },
    {
      name: 'mt-event__icon fa fa-snowflake-o'
    },
  ];

  constructor() { }

  ngOnInit() {
    this._getNewEvents();
    this._getMainEvent();
  }

  private _getNewEvents() {
    if (this.events && this.events.length > 0) {
      this.newEvents =  chunk(this.events, 3);
    }
  }

  private _getMainEvent() {
    if (this.events && this.events.length > 0) {
      this.mainEvent = this.events.filter(item => item.is_main === 1)[0];
    }
  }
}
