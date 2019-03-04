import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { UserTemplateService } from '../../../../shared/services/user-template.service';
import { UserTemplateInfo } from '../../../../shared/models/user-template-info';
import { NotifyService } from '../../../../shared/services/notify.service';
import { tempBackground } from '../../../../shared/mock-data/temp-background';
import { TemplateBackground } from 'src/shared/models/temp-background';
import { TemplateImage } from 'src/shared/models/temp-image';

@Component({
  selector: 'app-m-template04',
  templateUrl: './m-template04.component.html',
  styleUrls: ['./m-template04.component.scss']
})
export class MasterTemplate04Component implements OnInit {
  public userTempInfo: UserTemplateInfo = new UserTemplateInfo();
  public allImages: TemplateImage[] = [];

  public isLoading = false;

  constructor(
    private _router: Router,
    private _userTempService: UserTemplateService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    const url = this._router.url;
    const id = +url.split('/')[2];

    if (id) {
      this._scrollEvent();
      this._getUserTemplate(id);
    }
  }

  private _scrollEvent() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 67) {
        $('.mt-navbar').removeClass('mt-navbar--trans');
        $('.mt-navbar').addClass('mt-navbar--light');
      } else {
        $('.mt-navbar').removeClass('mt-navbar--light');
        $('.mt-navbar').addClass('mt-navbar--trans');
      }
    });
  }

  private _getUserTemplate(id: number) {
    if (this.isLoading) {
      return;
    }

    this._userTempService.getUserTemplateInfor(id)
    .subscribe(res => {
      this.userTempInfo = new UserTemplateInfo(res.data);
      tempBackground.map(item => {
        this.userTempInfo.backgrounds.push(new TemplateBackground(item));
      });

      console.log(this.userTempInfo);

      if (this.userTempInfo.albums.length > 0) {
        this.userTempInfo.albums.map(item => {
          item.images.map(img => {
            this.allImages.push(new TemplateImage(img));
          });
        });
      }

      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }
}
