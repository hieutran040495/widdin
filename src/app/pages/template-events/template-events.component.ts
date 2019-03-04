import { Component, OnInit, TemplateRef } from '@angular/core';
import * as clone from 'clone/clone';
import * as $ from 'jquery';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { MODAL } from '../../../shared/enums/modal';
import { TemplateEvent } from '../../../shared/models/temp-event';

import { TemplateEventsService } from '../../../shared/services/temp-events.service';
import { NotifyService } from 'src/shared/services/notify.service';
import { ModalCeTempEventComponent } from './modal-ce/modal-ce.component';
import { ModalDeleteEventComponent } from './modal-delete/modal-delete.component';

@Component({
  selector: 'app-template-events',
  templateUrl: './template-events.component.html',
  styleUrls: ['./template-events.component.scss']
})
export class TemplateEventsComponent implements OnInit {
  public tempEvents: TemplateEvent[];
  public tempEvent: TemplateEvent;

  public isLoading = false;
  public isActivating = false;

  public modalDeleteRef: BsModalRef;
  public modalDeleteConfig: any;

  constructor(
    private _tempEventsService: TemplateEventsService,
    private _modalService: BsModalService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this._getEvents();
  }

  private _getEvents() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.tempEvents = [];

    const opts = {
      order: 'desc'
    };

    this._tempEventsService.getEvents(opts)
    .subscribe(res => {
      res.data.items.map(item => {
        this.tempEvents.push(new TemplateEvent(item));
      });

      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  // Modal entry component
  public openCEModal(tempEvent?: TemplateEvent) {
    if (!tempEvent) {
      tempEvent = new TemplateEvent();
    }

    const configs = {
      class: MODAL.SIZE_LG,
      initialState: {
        tempEvent: tempEvent,
      }
    };

    this._openEntryModal(ModalCeTempEventComponent, configs);
  }

  public openDeleteModal(tempEvent: TemplateEvent) {
    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        tempEvent: clone(tempEvent),
      }
    };

    this._openEntryModal(ModalDeleteEventComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'reload') {
        this._getEvents();
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }

  public activateEvent(event: TemplateEvent) {
    if (this.isActivating || !event.id) {
      return;
    }

    this.isActivating = true;

    const trId = `#tb-tr-${event.id}`;

    this._tempEventsService.updateEvent(event.formData())
    .subscribe(res => {
      this._notifyService.success('Chọn sự kiện chính thành công');
      $('tbody tr').removeClass('v-table--active');
      event.is_main = 1;
      $(trId).addClass('v-table--active');
      this.isActivating = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isActivating = false;
    });
  }
}
