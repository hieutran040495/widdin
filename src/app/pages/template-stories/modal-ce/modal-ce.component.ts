import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../../../node_modules/ngx-bootstrap/modal';

import { TemplateStory } from '../../../../shared/models/temp-story';
import { Regexs } from '../../../../shared/constants/regex';

import { Mode } from '../../../../shared/models/mode';

import { TemplateStoriesService } from '../../../../shared/services/temp-stories.service';
import { NotifyService } from '../../../../shared/services/notify.service';

import { DatepickerHelper } from '../../../../shared/utils/datepicker-config';

@Component({
  selector: 'app-temp-story-modal-ce',
  templateUrl: './modal-ce.component.html',
  styleUrls: ['./modal-ce.component.scss']
})
export class ModalCeTempStoryComponent implements OnInit {
  public story: TemplateStory;
  public curMode = new Mode();

  public rules = Regexs;

  public isSubmitting = false;

  // bsDatepicker
  public bsConfig = DatepickerHelper.getDatepickerConfig();

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempStoriesService: TemplateStoriesService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    if (!this.story.id) {
      this.curMode.setNew();
      this.story.start_date_picker = new Date();
    } else {
      this.curMode.setEdit();
      this.story.start_date_picker = new Date(this.story.start_date);
    }
  }

  public editStory() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this._tempStoriesService.updateStory(this.story.editData())
    .subscribe(res => {
      this._notifyService.success('Sửa câu chuyện thành công');
      this.isSubmitting = false;
      this.closeModal('reload');
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }

  public createStory() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this._tempStoriesService.createStory(this.story.toJSONString())
    .subscribe(res => {
      this._notifyService.success('Tạo câu chuyện thành công');
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
