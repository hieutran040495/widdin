import { Component, OnInit, TemplateRef } from '@angular/core';
import * as clone from 'clone/clone';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { MODAL } from '../../../shared/enums/modal';
import { TemplateMaxim } from '../../../shared/models/temp-maxim';

import { TemplateMaximsService } from '../../../shared/services/temp-maxim.service';
import { NotifyService } from '../../../shared/services/notify.service';

import { ModalCeTempMaximsComponent } from './modal-ce/modal-ce.component';
import { ModalDeleteMaximsComponent } from './modal-delete/modal-delete.component';

@Component({
  selector: 'app-template-maxims',
  templateUrl: './template-maxims.component.html',
  styleUrls: ['./template-maxims.component.scss']
})
export class TemplateMaximsComponent implements OnInit {
  public tempMaxims: TemplateMaxim[];
  public tempStory: TemplateMaxim;

  public isLoading = false;

  public modalDeleteRef: BsModalRef;
  public modalDeleteConfig: any;

  constructor(
    private _tempMaximsService: TemplateMaximsService,
    private _modalService: BsModalService,
    private _notifyService: NotifyService,

  ) { }

  ngOnInit() {
    this._getMaxims();
  }

  private _getMaxims() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.tempMaxims = [];

    this._tempMaximsService.getMaxims()
    .subscribe(res => {
      res.data.items.map(item => {
        this.tempMaxims.push(new TemplateMaxim(item));
      });
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  // Modal entry component
  public openCEModal(maxim?: TemplateMaxim) {
    if (!maxim) {
      maxim = new TemplateMaxim();
    }

    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        maxim: clone(maxim),
      }
    };

    this._openEntryModal(ModalCeTempMaximsComponent, configs);
  }

  public openDeleteModal(maxim: TemplateMaxim) {
    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        maxim: clone(maxim),
      }
    };

    this._openEntryModal(ModalDeleteMaximsComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'reload') {
        this._getMaxims();
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }
}
