import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { of, Observable } from 'rxjs';
import { store, stores } from '../mock-data/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private _api: ApiService,
  ) { }

  public getStore(id: number): Observable<any> {
    return of(store);
  }

  public getStores(opts?: any): Observable<any> {
    return of(stores);
  }
}
