import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RootScopeService } from '../services/root-scope';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _rootScope: RootScopeService,
    private _authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    // TODO: assign user and credential to rootscope
    if (this._rootScope.hasCredential()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }
}
