import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { RootScopeService } from '../../services/root-scope';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _rootScope: RootScopeService,
  ) { }

  ngOnInit() {
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  public logout() {
    localStorage.clear();
    sessionStorage.clear();
    this._rootScope.reset();
    window.location.reload();
    this.closeModal();
  }
}
