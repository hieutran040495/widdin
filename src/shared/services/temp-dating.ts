import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tempDating } from '../mock-data/temp-dating';

// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateDatingService {

  constructor(
    // private _api: ApiService,
  ) { }

  public getTempDating(opts?: any): Observable<any> {
    return of(tempDating);
  }

  public createTempDating(opts?: any): Observable<any> {
    return of('Success');
  }
}
