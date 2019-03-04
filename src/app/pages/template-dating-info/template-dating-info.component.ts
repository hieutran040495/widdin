import { Component, OnInit } from '@angular/core';

import { TemplateDating } from '../../../shared/models/temp-dating';

import { TemplateDatingService } from '../../../shared/services/temp-dating';
import { NotifyService } from '../../../shared/services/notify.service';

import { Regexs } from '../../../shared/constants/regex';

@Component({
  selector: 'app-template-dating-info',
  templateUrl: './template-dating-info.component.html',
  styleUrls: ['./template-dating-info.component.scss']
})
export class TemplateDatingInfoComponent implements OnInit {
  public rules =  Regexs;

  public tempDating: TemplateDating;
  public isLoading = false;

  constructor(
    private _tempDatingService: TemplateDatingService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this._getDating();
  }

  private _getDating() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.tempDating = new TemplateDating();

    this._tempDatingService.getTempDating()
    .subscribe(res => {
      this.tempDating = new TemplateDating(res);
      this.isLoading = false;
    }, errors => {
      this.isLoading = false;
    });
  }

  public submitDating() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    console.log(this.tempDating);

    this._tempDatingService.createTempDating(this.tempDating)
    .subscribe(res => {
      console.log(res);
      this._notifyService.success('Cập nhật ngày hẹn hò thành công');
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }
}
