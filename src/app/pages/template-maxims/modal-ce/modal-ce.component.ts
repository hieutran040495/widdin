import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../../../node_modules/ngx-bootstrap/modal';

import { TemplateMaxim } from '../../../../shared/models/temp-maxim';
import { Regexs } from '../../../../shared/constants/regex';
import { Mode } from '../../../../shared/models/mode';

import { TemplateMaximsService } from '../../../../shared/services/temp-maxim.service';
import { NotifyService } from '../../../../shared/services/notify.service';

@Component({
  selector: 'app-temp-maxim-modal-ce',
  templateUrl: './modal-ce.component.html',
  styleUrls: ['./modal-ce.component.scss']
})
export class ModalCeTempMaximsComponent implements OnInit {
  public maxim: TemplateMaxim;
  public curMode = new Mode();

  public rules = Regexs;

  public isSubmitting = false;

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempMaximService: TemplateMaximsService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    if (!this.maxim.id) {
      this.curMode.setNew();
    } else {
      this.curMode.setEdit();
    }
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  public editMaxim() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this._tempMaximService.updateMaxim(this.maxim.editData())
    .subscribe(res => {
      this._notifyService.success('Sửa châm ngôn thành công');
      this.isSubmitting = false;
      this.closeModal('reload');
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }

  public createMaxim() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this._tempMaximService.createMaxim(this.maxim.toJSONString())
    .subscribe(res => {
      this._notifyService.success('Tạo châm ngôn thành công');
      this.isSubmitting = false;
      this.closeModal('reload');
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }
}

