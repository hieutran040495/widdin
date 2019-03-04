import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { ModalCreateStoreComponent } from '../../pages/modal-create-store/modal-create-store.component';

import { AuthService } from '../../../shared/services/auth.service';
import { RootScopeService } from 'src/app/services/root-scope';

import { MODAL } from '../../../shared/enums/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public user: any;
  public isLogged = false;

  constructor(
    private _authService: AuthService,
    private _modalService: BsModalService,
    private _rootScope: RootScopeService,
  ) { }

  ngOnInit() {
    this.login();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLogged = this._rootScope.hasCredential();
    });
  }

  public toggleSearch() {
    const isShow = $('.navbar-collapse').hasClass('show');

    if (isShow) {
      $('.navbar-collapse').removeClass('show');
    }

    $('.navbar .v-input-group')
    .animate({
      height: 'toggle',
    }, 250 );
  }

  public toggleNavbar() {
    $('.navbar .v-input-group').css('display', 'none');
  }

  public login() {
    const data = {
      email: 'abc@gmail.com',
      password: 'abcd1234'
    };

    this._authService.login(data)
    .subscribe(res => {
      this.user = res;
      this.isLogged = true;
    }, errors => {

    });
  }

  // Modal entry component
  public openLoginModal() {
    this._openEntryModal(LoginComponent);
  }

  public openLogoutModal() {
    this._openEntryModal(LogoutComponent);
  }

  public openCreateStoreModal() {
    const configs = {
      class: MODAL.SIZE_MD,
    };

    this._openEntryModal(ModalCreateStoreComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'reload') {
        // this._getEvents();
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }
}
