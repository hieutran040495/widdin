import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { events } from '../mock-data/temp-events';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateEventsService {

  constructor(
    private _api: ApiService,
  ) { }

  public getEvents(opts?: any) {
    return this._api.get('events', opts);
  }

  public createEvent(body) {
    return this._api.post('events/store', body);
  }

  public updateEvent(body) {
    return this._api.post(`events/update`, body);
  }

  public deleteEvent(body) {
    return this._api.post(`events/delete`, body);
  }
}
