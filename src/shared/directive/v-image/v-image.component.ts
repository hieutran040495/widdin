import { Component, OnInit, Input } from '@angular/core';

import { uiAvatars } from '../../utils/ui-avatar';
import { ResponsiveSrceen } from '../../utils/responsive-screen';
import * as $ from 'jquery';

@Component({
  selector: 'app-v-image',
  templateUrl: './v-image.component.html',
  styleUrls: ['./v-image.component.scss']
})
export class VImageComponent implements OnInit {

  public loadingImg = true;

  /**  Image Height : 100px */
  private _imgHeight: string;
  @Input('imgHeight')
  public get imgHeight(): string {
    return this._imgHeight || '100px';
  }
  public set imgHeight(v: string) {
    this._imgHeight = v;
  }

  /**  Image Width : 100px */
  private _imgWidth: string;
  @Input('imgWidth')
  public get imgWidth(): string {
    return this._imgWidth || '100px';
  }
  public set imgWidth(v: string) {
    this._imgWidth = v;
  }

  /** Image Url */
  private _imgUrl: string;
  @Input('imgUrl')
  public get imgUrl(): string {
    return this._imgUrl;
  }
  public get bgUrl(): string {
    return `url('${this.imgUrl}')`;
  }
  public set imgUrl(v: string) {
    this._imgUrl = v;
  }

  /** Image Name: 'Avatar' */
  private _imgName: string;
  @Input('imgName')
  public get imgName(): string {
    return this._imgName || 'Avatar';
  }
  public set imgName(v: string) {
    this._imgName = v;
  }

  constructor() { }

  ngOnInit() {}

  /**
   * Check image url is valid or broken
   */
  public onError() {
    this.imgUrl = uiAvatars(this.imgName);
  }

  /**
   * Check image finished loading
   */
  public onLoad() {
    this.loadingImg = false;
  }

  public getImgHeight() {
    if (ResponsiveSrceen.isPhone()) {
      const newHeight = +this.imgHeight - 50;
      return `${newHeight}px`;
    } else if (ResponsiveSrceen.isSmallPhone()) {
      const newHeight = +this.imgHeight - 100;
      return `${newHeight}px`;
    } else {
      return `${this.imgHeight}px`;
    }
  }
}
