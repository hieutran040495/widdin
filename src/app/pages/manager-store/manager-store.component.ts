import { Component, OnInit } from '@angular/core';

import { UserTemplateService } from '../../../shared/services/user-template.service';
import { NotifyService } from '../../../shared/services/notify.service';

@Component({
  selector: 'app-manager-store',
  templateUrl: './manager-store.component.html',
  styleUrls: ['./manager-store.component.scss']
})
export class ManagerStoreComponent implements OnInit {
  public id: any;

  public isLoading = false;

  constructor(
    private _userTempService: UserTemplateService,
    private _notify: NotifyService
  ) { }

  ngOnInit() {
    this._getUserTemplates();
  }

  private _getUserTemplates() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this._userTempService.getUserTemplates()
    .subscribe(res => {
      this.isLoading = false;
    }, errors => {
      this._notify.error(errors);
      this.isLoading = false;
    });
  }
}
