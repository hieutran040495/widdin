import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { NotifyService } from '../../../shared/services/notify.service';

@Component({
  selector: 'app-modal-create-store',
  templateUrl: './modal-create-store.component.html',
  styleUrls: ['./modal-create-store.component.scss']
})
export class ModalCreateStoreComponent implements OnInit {
  public isSubmitting = false;

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  public createStore() {
    // Do something
  }
}
