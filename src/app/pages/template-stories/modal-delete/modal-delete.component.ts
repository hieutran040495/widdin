import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../../../node_modules/ngx-bootstrap/modal';

import { TemplateStoriesService } from '../../../../shared/services/temp-stories.service';
import { NotifyService } from '../../../../shared/services/notify.service';

import { TemplateStory } from '../../../../shared/models/temp-story';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {
  public story: TemplateStory;
  public isSubmitting = false;

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempStoriesService: TemplateStoriesService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
  }

  public deleteStory() {
    const data = {
      id: this.story.id
    };

    this._tempStoriesService.deleteStory(data)
    .subscribe(res => {
      this._notifyService.success('Xóa câu chuyện thành công');
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
