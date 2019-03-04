import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { TemplateEvent } from '../../../../shared/models/temp-event';

import { TemplateEventsService } from '../../../../shared/services/temp-events.service';
import { NotifyService } from '../../../../shared/services/notify.service';

@Component({
  selector: 'app-temp-event-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteEventComponent implements OnInit {
  public tempEvent: TemplateEvent;
  public isSubmitting = false;

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempEventService: TemplateEventsService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
  }

  public deleteEvent() {
    const data = {
      id: this.tempEvent.id
    };

    this._tempEventService.deleteEvent(data)
    .subscribe(res => {
      this._notifyService.success('Xóa sự kiện thành công');
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
