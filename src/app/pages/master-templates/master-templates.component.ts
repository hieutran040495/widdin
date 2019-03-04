import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MasterTemplateService } from '../../../shared/services/master-template.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { UserTemplateService } from '../../../shared/services/user-template.service';

import { MasterTemplate } from '../../../shared/models/m-template';
import { QueryBuilder } from 'src/shared/utils/query-builder';

@Component({
  selector: 'app-master-templates',
  templateUrl: './master-templates.component.html',
  styleUrls: ['./master-templates.component.scss']
})
export class MasterTemplatesComponent implements OnInit {
  public templates: MasterTemplate[];
  public selectedTemplate: MasterTemplate = new MasterTemplate();

  public paginate: QueryBuilder = new QueryBuilder();
  public isPaginate = false;

  public isOpenPreview = false;
  public isLoading = false;
  public isSubmiting = false;

  public total: number;
  public redirect: string;

  constructor(
    private _masterTempService: MasterTemplateService,
    private _userTempService: UserTemplateService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      if (params.redirect) {
        this.redirect = params.redirect;
      } else {
        this.redirect = 'manager-templates';
      }
    });

    this._getTemplates();
  }

  public pageChanged(event) {
    if (this.isPaginate) {
      return;
    }
    this.isPaginate = true;
    this._getTemplates(event.page);
  }

  private _getTemplates(page?: number) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.templates = [];

    this._masterTempService.getMasterTemplates(page)
    .subscribe(res => {
      res.data.items.map(temp => {
        this.templates.push(new MasterTemplate(temp));
      });

      this.total = res.data.pagination.total;
      this.isLoading = false;

      this.isPaginate = false;
      this.paginate.setPagination(res.data.pagination);
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  public chooseTemplate(id: number) {
    if (this.isSubmiting) {
      return;
    }

    this.isSubmiting = true;
    const opts = {
      m_template_id: id
    };

    this._userTempService.createUserTemplate(opts)
    .subscribe(res => {
      this._router.navigate([this.redirect]);
      this.isSubmiting = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmiting = false;
    });

  }

  public showPreview(temp: MasterTemplate) {
    this.isOpenPreview = true;
    this.selectedTemplate = new MasterTemplate(temp);
  }

  public closedPreview(e: any) {
    this.isOpenPreview = false;
  }
}
