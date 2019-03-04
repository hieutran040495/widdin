import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { templates } from '../mock-data/templates';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MasterTemplateService {

  constructor(
    private _api: ApiService,
  ) { }

  public getMasterTemplates(page?: number) {
    if (page >= 1) {
      return this._api.get(`m/templates?page=${page}`);
    } else {
      return this._api.get('m/templates');
    }
  }
}
