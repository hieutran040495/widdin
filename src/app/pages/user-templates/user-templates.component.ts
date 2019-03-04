import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import * as clone from 'clone/clone';
import $ from 'jquery';

import { UserTemplateService } from '../../../shared/services/user-template.service';
import { NotifyService } from '../../../shared/services/notify.service';

import { UserTemplate } from '../../../shared/models/user-template';

@Component({
  selector: 'app-user-templates',
  templateUrl: './user-templates.component.html',
  styleUrls: ['./user-templates.component.scss']
})
export class UserTemplatesComponent implements OnInit {
  @ViewChild('deleteTemplate') deleteTemplate: TemplateRef<any>;
  public userTemplates: UserTemplate[] = [];

  public isLoading = false;
  public isSubmitting = false;

  public modalDeleteRef: BsModalRef;
  public modalDeleteConfig: any;

  constructor(
    private _userTemplateService: UserTemplateService,
    private _modalService: BsModalService,
    private _router: Router,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this._getTemplates();
  }

  private _getTemplates() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.userTemplates = [];

    this._userTemplateService.getUserTemplates()
    .subscribe(res => {
      res.data.items.map(item => {
        this.userTemplates.push(new UserTemplate(item));
      });
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  public activeTemplate(mTempId: number) {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    const opts = {
      m_template_id: mTempId,
      is_active: 1,
    };

    this._userTemplateService.activeTemplate(opts)
    .subscribe(res => {
      this._notifyService.success('Kích hoạt giao diện thành công');
      this._getTemplates();
      this.isSubmitting = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }

  public deactivate(mTempId: number) {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    const opts = {
      m_template_id: mTempId,
      is_active: 0,
    };

    this._userTemplateService.activeTemplate(opts)
    .subscribe(res => {
      this._notifyService.success('Hủy kích hoạt giao diện thành công');
      this._getTemplates();
      this.isSubmitting = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }


  public chooseTemplate(temp) {
    const tempId = `temp-${temp.id}`;
    const vCard = $('.v-card');

    $.each(vCard, function(index, val) {
      const itemId = $(val).attr('id');
      if (itemId !== tempId) {
        $(val).removeClass('selected');
      } else {
        $(`#${tempId}`).addClass('selected');
      }
    });

    if (temp.file_name) {
      window.open( `/service-templates/${temp.file_name}/${temp.id}` );
    }
  }

  // public deleteTemp() {
  //   this._userTemplateService.deleteUserTemplates(this.selectedTemplate)
  //   .subscribe(res => {
  //     console.log(res);
  //     this.close();
  //   }, errors => {

  //   });
  // }

  // public openModal(template: TemplateRef<any>, data: any) {
  //   this.selectedTemplate = clone(data);
  //   this.modalDeleteRef = this._modalService.show(template);
  // }

  // public close () {
  //   this.modalDeleteRef.hide();
  //   this.modalDeleteRef = null;
  // }
}
