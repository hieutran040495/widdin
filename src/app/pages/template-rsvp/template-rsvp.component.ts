import { Component, OnInit } from '@angular/core';

import { TemplateRSVP } from '../../../shared/models/temp-rsvp';

import { TemplateRSVPService } from '../../../shared/services/temp-rsvp.service';

@Component({
  selector: 'app-template-rsvp',
  templateUrl: './template-rsvp.component.html',
  styleUrls: ['./template-rsvp.component.scss']
})
export class TemplateRSVPComponent implements OnInit {
  public listRSVP: TemplateRSVP[];
  public tempRSVP: TemplateRSVP;

  public isLoading = false;

  constructor(
    private _tempRSVPService: TemplateRSVPService,
  ) { }

  ngOnInit() {
    this._getListRSVP();
  }

  private _getListRSVP() {
    this.isLoading = true;
    this.listRSVP = [];

    this._tempRSVPService.getRSVP()
    .subscribe(res => {
      res.map(item => {
        this.listRSVP.push(new TemplateRSVP(item));
      });
      this.isLoading = false;
    }, errors => {
      this.isLoading = false;
    });
  }
}
