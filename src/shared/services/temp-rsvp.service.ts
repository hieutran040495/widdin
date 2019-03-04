import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { listRSVP } from '../mock-data/temp-rsvp';

// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateRSVPService {

  constructor(
    // private _api: ApiService,
  ) { }

  public getRSVP(opts?: any): Observable<any> {
    return of(listRSVP);
  }

  public createRSVP(opts?: any): Observable<any> {
    return of('Success');
  }

  public deleteRSVP(opts?: any): Observable<any> {
    return of('Success');
  }
}
