import { Component, OnInit, TemplateRef } from '@angular/core';
import * as clone from 'clone/clone';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { TemplateStory } from '../../../shared/models/temp-story';
import { MODAL } from '../../../shared/enums/modal';

import { TemplateStoriesService } from '../../../shared/services/temp-stories.service';
import { NotifyService } from '../../../shared/services/notify.service';

import { ModalCeTempStoryComponent } from './modal-ce/modal-ce.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@Component({
  selector: 'app-template-stories',
  templateUrl: './template-stories.component.html',
  styleUrls: ['./template-stories.component.scss']
})
export class TemplateStoriesComponent implements OnInit {
  public tempStories: TemplateStory[];
  public tempStory: TemplateStory;

  public isLoading = false;
  public isSubmitting = false;

  public modalDeleteRef: BsModalRef;
  public modalDeleteConfig: any;

  constructor(
    private _tempStoriesService: TemplateStoriesService,
    private _modalService: BsModalService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this._getStories();
  }

  private _getStories() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.tempStories = [];

    this._tempStoriesService.getStories()
    .subscribe(res => {
      res.data.items.map(item => {
        this.tempStories.push(new TemplateStory(item));
      });
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  // Modal entry component
  public openModalCEStory(story?: TemplateStory) {
    if (!story) {
      story = new TemplateStory();
    }

    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        story: clone(story),
      }
    };

    this._openEntryModal(ModalCeTempStoryComponent, configs);
  }

  public openDeleteStory(story: TemplateStory) {
    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        story: clone(story),
      }
    };

    this._openEntryModal(ModalDeleteComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'reload') {
        this._getStories();
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }
}
