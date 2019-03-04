import { Component, OnInit } from '@angular/core';

import { NotifyService } from '../../../shared/services/notify.service';
import { TemplateInvitationService } from '../../../shared/services/temp-invitation';

import { TemplateInvitation } from '../../../shared/models/temp-invitation';
import { Regexs } from '../../../shared/constants/regex';

@Component({
  selector: 'app-template-invitation',
  templateUrl: './template-invitation.component.html',
  styleUrls: ['./template-invitation.component.scss']
})
export class TemplateInvitationComponent implements OnInit {
  public rules =  Regexs;

  public tempInvitation: TemplateInvitation;
  public isLoading = false;

  constructor(
    private _tempInvitationService: TemplateInvitationService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this._getInvitation();
  }

  private _getInvitation() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.tempInvitation = new TemplateInvitation();

    this._tempInvitationService.getTempInvitation()
    .subscribe(res => {
      this.tempInvitation = new TemplateInvitation(res);
      this.isLoading = false;

    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  public submitInvitation() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    console.log(this.tempInvitation);

    this._tempInvitationService.createTempInvitation(this.tempInvitation)
    .subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this._notifyService.success('Cập nhật thư mời thành công');
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }
}
