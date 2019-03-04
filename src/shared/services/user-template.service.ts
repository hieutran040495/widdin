import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserTemplateService {

  constructor(
    private _api: ApiService,
  ) { }

  public getUserTemplates(opts?: any) {
    return this._api.get('templates');
  }

  public activeTemplate(opts: any) {
    return this._api.post('templates/active', opts);
  }

  public getUserTemplateInfor(id: number, opts?: any) {
    return this._api.get(`templates/detail?user_id=${id}`);
  }

  public createUserTemplate(opts: any) {
    return this._api.post(`templates/store`, opts);
  }
  public deleteUserTemplates(id: number): Observable<any> {
    return of(`${id}, Success`);
  }
}
