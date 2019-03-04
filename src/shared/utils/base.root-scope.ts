import { Injectable } from '@angular/core';
import { User } from '../models/user';

import * as moment from 'moment';
import * as decode from 'jsonwebtoken/decode';

export interface Credential {
  token?: string;
}

@Injectable()
export class BaseRootScope {

  private _credential: Credential;
  public get credential(): Credential {
    return this._credential;
  }
  public set credential(v: Credential) {
    this._credential = v;
  }
  public get token(): string {
    return this._credential.hasOwnProperty('token') ? this._credential.token : null;
  }

  private _curUser: User;
  public get curUser(): User {
    return this._curUser;
  }
  public set curUser(v: User) {
    this._curUser = v;
  }

  private _etags: object;
  public get etags(): object {
    return this._etags;
  }
  public set etags(v: object) {
    this._etags = v;
  }

  constructor() {
    this.reset();
  }

  public hasCredential(): boolean {
    return this.credential.hasOwnProperty('token');
  }

  /**
   * @return true if token unexpired
   * @return false if token expired or no token
   */
  public fetchLocalStorageData(): void {
    try {
      const data = JSON.parse(localStorage.getItem('vzlove_app'));

      if (data.hasOwnProperty('token')) {
        this.credential = { token: data.token };
      }
    } catch (e) { }
  }

  // /**
  //  * @return true if token expired
  //  */

  // public isExpired(): boolean {
  //   const tokenDecode: any = decode(this.token);

  //   if (moment().isSameOrAfter(moment(tokenDecode.exp * 1000).subtract(1, 'd'))) {
  //     return true;
  //   }

  //   this.curUser = new User(tokenDecode.context);
  //   return false;
  // }

  public reset() {
    this.credential = {};
    this.etags = {};
    this.curUser = new User();
  }
}
