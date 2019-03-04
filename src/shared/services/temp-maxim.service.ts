import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateMaximsService {

  constructor(
    private _api: ApiService,
  ) { }

  public getMaxims(opts?: any) {
    return this._api.get('maxims');
  }

  public createMaxim(body: any) {
    return this._api.post('maxims/store', body);
  }

  public updateMaxim(body: any) {
    return this._api.post('maxims/update', body);
  }

  public deleteMaxim(body: any) {
    return this._api.post('maxims/delete', body);
  }
}
