import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { TemplateMaxim } from '../../../../shared/models/temp-maxim';

import { TemplateMaximsService } from '../../../../shared/services/temp-maxim.service';
import { NotifyService } from '../../../../shared/services/notify.service';

@Component({
  selector: 'app-temp-maxim-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteMaximsComponent implements OnInit {
  public maxim: TemplateMaxim;
  public isSubmitting = false;

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempMaximService: TemplateMaximsService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
  }

  public deleteMaxim() {
    const data = {
      id: this.maxim.id
    };

    this._tempMaximService.deleteMaxim(data)
    .subscribe(res => {
      this._notifyService.success('Xóa châm ngôn thành công');
      this.isSubmitting = false;
      this.closeModal('reload');
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }
}
