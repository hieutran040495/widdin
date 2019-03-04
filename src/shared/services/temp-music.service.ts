import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { listMusic } from '../mock-data/temp-music';

// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateMusicService {

  constructor(
    // private _api: ApiService,
  ) { }

  public getTempMusic(opts?: any): Observable<any> {
    return of(listMusic);
  }

  public activeMusic(id: number): Observable<any> {
    return of('Active Success');
  }
}
