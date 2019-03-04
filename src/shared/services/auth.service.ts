import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { user } from '../mock-data/authentication';

import { LoginData } from '../interfaces/login-data';

// import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // private _api: ApiService,
  ) { }

  public login(data: LoginData): Observable<any> {
    return of(user);
  }
}
