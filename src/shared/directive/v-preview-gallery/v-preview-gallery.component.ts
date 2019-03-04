import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { TemplateImage } from '../../../shared/models/temp-image';

@Component({
  selector: 'app-v-preview-gallery',
  templateUrl: './v-preview-gallery.component.html',
  styleUrls: ['./v-preview-gallery.component.scss']
})
export class VPreviewGalleryComponent implements OnInit {
  @Output() closedPreview: EventEmitter<any> = new EventEmitter<any>();

  public isFullSize = false;

  private _galleryImages: TemplateImage[];
  @Input('galleryImages')
  public get galleryImages(): TemplateImage[] {
    return this._galleryImages;
  }
  public set galleryImages(v: TemplateImage[]) {
    this._galleryImages = v;
  }

  private _isOpenPreview: boolean;
  @Input('isOpenPreview')
  public get isOpenPreview(): boolean {
    return this._isOpenPreview;
  }
  public set isOpenPreview(v: boolean) {
    this._isOpenPreview = v;
  }

  private _selectedItem: any;
  @Input('selectedItem')
  public get selectedItem(): any {
    return this._selectedItem;
  }
  public set selectedItem(v: any) {
    this._selectedItem = v;
  }

  constructor() {
  }

  ngOnInit() {
    this._showPreview();
  }

  private _showPreview() {
    if (!this.isOpenPreview) {
      return;
    }

    $('.v-gallery__preview').addClass('d-block');
    setTimeout(() => {
      if (this.selectedItem) {
        $(`#gallery-item-${this.selectedItem.id}`).addClass('active');
      } else {
        $(`#gallery-item-${this.galleryImages[0].id}`).addClass('active');
      }
    }, 0);
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

    this.selectedItem = null;
    $('.carousel-item').removeClass('active');
    this.closedPreview.emit(false);
  }
}
