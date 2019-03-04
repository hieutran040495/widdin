import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as decode from 'jsonwebtoken/decode';

import { LoginData } from '../../../shared/interfaces/login-data';
import { Regexs } from '../../../shared/constants/regex';

import { RootScopeService } from '../../services/root-scope';
import { NotifyService } from 'src/shared/services/notify.service';

import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public rules = Regexs;
  public isLogin = false;
  public isLoading = false;

  public loginData: LoginData = {
    email: '',
    password: ''
  };

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _rootScope: RootScopeService,
    private _notifyService: NotifyService,
  ) {
    if (!this._rootScope.hasCredential()) {
      this._rootScope.fetchLocalStorageData();
    }
  }

  ngOnInit() {
    if (this._rootScope.hasCredential) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  public login() {
    const fakeUser = {
      email: 'hieu',
      password: '656536'
    };

    if (this.loginData.email === fakeUser.email && this.loginData.password === fakeUser.password) {
      this._rootScope.credential = { token: 'wOXcreOf5WXBJh4sMWRnpOFaamSvW2iqDOUK1ITzLQxAPA5Cquf1RtB5YyqC9KOX'};
      localStorage.setItem('vzlove_app', JSON.stringify(this._rootScope.credential));
      window.location.reload();
      this.closeModal();
    } else {
      this._notifyService.error('Email hoặc mật khẩu không đúng.');
    }
  }
}
