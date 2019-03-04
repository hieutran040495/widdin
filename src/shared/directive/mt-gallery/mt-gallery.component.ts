import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { uiAvatars } from '../../utils/ui-avatar';

import { TemplateImage } from '../../../shared/models/temp-image';
import { TemplateAlbum } from 'src/shared/models/temp-album';

@Component({
  selector: 'app-mt-gallery',
  templateUrl: './mt-gallery.component.html',
  styleUrls: ['./mt-gallery.component.scss']
})
export class MtGalleryComponent implements OnInit {
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  public selectedImg: TemplateImage;
  public isFullSize = false;

  public loadingImg = true;

  public galleryImages: TemplateImage[] = [];

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

  private _albums: TemplateAlbum[];
  @Input('albums')
  public get albums(): TemplateAlbum[] {
    return this._albums;
  }
  public set albums(v: TemplateAlbum[]) {
    this._albums = v;
  }
  constructor() {
  }

  ngOnInit() {
    this.selectedImg = new TemplateImage();
    this._getAllImages();
  }

  public viewAlbum(id?: number) {
    this.galleryImages = [];

    if (!id) {
      this._getAllImages();
    } else {
      const images = this.albums.filter(item => id === item.id)[0].images;

      images.map(item => {
        this.galleryImages.push(new TemplateImage(item));
      });
    }
  }

  private _getAllImages() {
    if (this.albums.length > 0) {
      this.albums.map(item => {
        item.images.map(img => {
          this.galleryImages.push(new TemplateImage(img));
        });
      });
    }
  }

  public onError(imgUrl: string) {
    console.log(imgUrl);
  }

  public onLoad() {
    this.loadingImg = false;
  }

  public showImage(img: TemplateImage) {
    $('.v-gallery__preview').addClass('d-block');
    this.selectedImg = new TemplateImage(img);
  }

  public fullSize() {
    $('.v-gallery__preview-img').addClass('v-gallery__preview-img-full');
    this.isFullSize = true;
  }

  public closeFullSize() {
    $('.v-gallery__preview-img').removeClass('v-gallery__preview-img-full');
    this.isFullSize = false;
  }

  public closePreview() {
    $('.v-gallery__preview').removeClass('d-block');
    $('.v-gallery__preview').addClass('d-none');

    this.selectedImg = new TemplateImage();
    $('.v-gallery__preview-img .carousel-item').removeClass('active');
  }
}
