import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tempInvitation } from '../mock-data/temp-invitation';

// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateInvitationService {

  constructor(
    // private _api: ApiService,
  ) { }

  public getTempInvitation(opts?: any): Observable<any> {
    return of(tempInvitation);
  }

  public createTempInvitation(opts?: any): Observable<any> {
    return of('Success');
  }
}
