import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TemplateImage } from '../../../shared/models/temp-image';

@Component({
  selector: 'app-v-gallery',
  templateUrl: './v-gallery.component.html',
  styleUrls: ['./v-gallery.component.scss']
})
export class VGalleryComponent implements OnInit {
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  public selectedImg: TemplateImage = new TemplateImage();
  public isOpenPreview = false;

  private _imgHeight: string;
  @Input('imgHeight')
  public get imgHeight(): string {
    return this._imgHeight;
  }
  public set imgHeight(v: string) {
    this._imgHeight = v;
  }

  private _imgWidth: string;
  @Input('imgWidth')
  public get imgWidth(): string {
    return this._imgWidth;
  }
  public set imgWidth(v: string) {
    this._imgWidth = v;
  }

  private _galleryImages: TemplateImage[];
  @Input('galleryImages')
  public get galleryImages(): TemplateImage[] {
    return this._galleryImages;
  }
  public set galleryImages(v: TemplateImage[]) {
    this._galleryImages = v;
  }

  private _delete: boolean;
  @Input('delete')
  public get delete(): boolean {
    return this._delete ? this._delete : false;
  }
  public set delete(v: boolean) {
    this._delete = v;
  }

  constructor() {
  }

  ngOnInit() {
  }

  public showImage(img: TemplateImage) {
    this.isOpenPreview = true;
    this.selectedImg = new TemplateImage(img);
  }

  public closedPreview(e: any) {
    this.isOpenPreview = false;
  }

  public removeImage(imgId: number) {
    this.deleteEvent.emit({id: imgId});
  }
}
