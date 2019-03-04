import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { coupleInfo } from '../mock-data/temp-couple';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateCoupleService {

  constructor(
    private _api: ApiService,
  ) { }

  public getCouple(opts?: any) {
    return this._api.get('couples/show');
  }

  public createCouple(body) {
    return this._api.post(`couples/store`, body);
  }

  public updateCouple(body) {
    return this._api.post(`couples/update`, body);
  }

}
