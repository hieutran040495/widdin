import { Component, OnInit } from '@angular/core';

import { UserTemplateService } from '../../../shared/services/user-template.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { MENU } from './menu';
import { MenuModel } from 'src/shared/models/menu';

@Component({
  selector: 'app-manager-templates',
  templateUrl: './manager-templates.component.html',
  styleUrls: ['./manager-templates.component.scss']
})
export class ManagerTemplatesComponent implements OnInit {
  public id: any;
  public asides: MenuModel[] = [];

  public hasTemplate = false;
  public isLoading = false;

  constructor(
    private _userTempService: UserTemplateService,
    private _notify: NotifyService
  ) { }

  ngOnInit() {
    MENU.map(item => {
      this.asides.push(new MenuModel(item));
    });

    this._getUserTemplates();
  }

  private _getUserTemplates() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this._userTempService.getUserTemplates()
    .subscribe(res => {
      if (res.data.items.length > 0) {
        this.hasTemplate = true;
      }
      this.isLoading = false;
    }, errors => {
      this._notify.error(errors);
      this.isLoading = false;
    });
  }
}
