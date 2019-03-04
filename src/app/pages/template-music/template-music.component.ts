import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { TemplateMusicService } from '../../../shared/services/temp-music.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { TemplateMusic } from '../../../shared/models/temp-music';

@Component({
  selector: 'app-template-music',
  templateUrl: './template-music.component.html',
  styleUrls: ['./template-music.component.scss']
})
export class TemplateMusicComponent implements OnInit {
  public listMusic: TemplateMusic[];
  public isLoading = false;
  public isActivating = false;

  constructor(
    private _tempMusicService: TemplateMusicService,
    private _notifyService: NotifyService
  ) { }

  ngOnInit() {
    this._getMusic();
  }

  private _getMusic() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.listMusic = [];

    this._tempMusicService.getTempMusic()
    .subscribe(res => {
      res.map(item => {
        this.listMusic.push(new TemplateMusic(item));
      });
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  public activeMusic(ms: TemplateMusic) {
    if (this.isActivating || !ms.id) {
      return;
    }

    this.isActivating = true;

    const trId = `#tb-tr-${ms.id}`;

    this._tempMusicService.activeMusic(ms.id)
    .subscribe(res => {
      this._notifyService.success(res);
      $('tbody tr').removeClass('v-table--active');
      ms.active = true;
      $(trId).addClass('v-table--active');
      this.isActivating = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isActivating = false;
    });
  }

  public selectedMusic(ms: TemplateMusic) {
    const trId = `tb-tr-${ms.id}`;

    $('tr').removeClass('temp-music__selected');
    $(`#${trId}`).addClass('temp-music__selected');

    $(`#audioPlayer`)[0].src = ms.path;
    $(`#audioPlayer`)[0].play();
  }
}
