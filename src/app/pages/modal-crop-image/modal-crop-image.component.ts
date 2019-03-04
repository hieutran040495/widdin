import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-crop-image',
  templateUrl: './modal-crop-image.component.html',
  styleUrls: ['./modal-crop-image.component.scss']
})
export class ModalCropImageComponent implements OnInit {
  public imageChangedEvent;
  public tagId: string;
  public key: string;

  public croppedImage: any = '';

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  public imageCropped(image: string) {
    this.croppedImage = image;
  }

  public imageLoaded() {
    // show cropper
  }

  public loadImageFailed() {
    // show message
  }

  public closeModal(reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  public cropped() {
    $(`#${this.tagId}`).attr('src', this.croppedImage);
    this.closeModal('cropped');
  }
}
