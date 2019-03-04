import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { TemplateEvent } from '../../../../shared/models/temp-event';
import { Regexs } from '../../../../shared/constants/regex';

import { Mode } from '../../../../shared/models/mode';

import { TemplateEventsService } from '../../../../shared/services/temp-events.service';
import { NotifyService } from '../../../../shared/services/notify.service';

import { DatepickerHelper } from '../../../../shared/utils/datepicker-config';

@Component({
  selector: 'app-temp-event-modal-ce',
  templateUrl: './modal-ce.component.html',
  styleUrls: ['./modal-ce.component.scss'],
})
export class ModalCeTempEventComponent implements OnInit {
  public tempEvent: TemplateEvent;
  public curMode = new Mode();

  public rules = Regexs;

  public isSubmitting = false;

  // bsDatepicker
  public bsConfig = DatepickerHelper.getDatepickerConfig();

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempEventService: TemplateEventsService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    if (!this.tempEvent.id) {
      this.curMode.setNew();
      this.tempEvent.start_date_picker = new Date();
    } else {
      this.curMode.setEdit();
      this.tempEvent.start_date_picker = new Date(this.tempEvent.start_date);
    }
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  public changeStartHours(e: any) {
    this.tempEvent.start_hours = e;
  }

  public changeEndHours(e: any) {
    this.tempEvent.end_hours = e;
  }

  public editTempEvent() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this._tempEventService.updateEvent(this.tempEvent.formData())
    .subscribe(res => {
      this._notifyService.success('Sửa sự kiện thành công');
      this.isSubmitting = false;
      this.closeModal('reload');
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }

  public createTempEvent() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this._tempEventService.createEvent(this.tempEvent.formData())
    .subscribe(res => {
      this._notifyService.success('Thêm sự kiện thành công');
      this.isSubmitting = false;
      this.closeModal('reload');
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }
}
