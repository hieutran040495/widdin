import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';

import ImageCompressor from 'image-compressor.js';

import { NotifyService } from '../../../shared/services/notify.service';

import { ConvertBase64ToFile } from '../../../shared/utils/convert-data-url';

import { UploaderService } from '../../../shared/utils/upload.service';
import { ValidatorImage } from '../../../shared/utils/validator-img.service';

import { TemplateAlbum } from '../../../shared/models/temp-album';

import { UPLOAD_MODE } from '../../../shared/enums/upload-mode';
import { IMAGE_MIME } from '../../../shared/enums/file-mime';
import { MODAL } from '../../../shared/enums/modal';

import { ImgValidateMess } from '../../../shared/constants/img-validate';

interface FileReader {
  url: string;
}

interface FileUpload {
  key: string;
  value: File;
}

@Component({
  selector: 'app-modal-upload-image',
  templateUrl: './modal-upload-image.component.html',
  styleUrls: ['./modal-upload-image.component.scss']
})
export class ModalUploadImageComponent implements OnInit, AfterViewInit {
  // Data from other component
  public files: any;
  public mode: string;
  public data: any;

  public accept_file = IMAGE_MIME.toString();

  public templateAlbum: TemplateAlbum = new TemplateAlbum();

  public filesReader: FileReader[] = [];
  public filesUpload: FileUpload[] = [];

  public isUploading = false;
  public isLoading = false;

  public isCreateAlbum = false;

  public globalFiles: any = [];

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _converBase64: ConvertBase64ToFile,
    private _uploader: UploaderService,
    private _notifyService: NotifyService,
    private _validatorImage: ValidatorImage,
  ) { }

  ngOnInit() {
    switch (this.mode) {
      case UPLOAD_MODE.CREATE_ALBUM:
        this.isCreateAlbum = true;
        break;
      default:
        this.isCreateAlbum = false;
        break;
    }

    for (const image of this.files.target.files) {
      this.globalFiles.push(image.name);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._reviewFile(this.files);
    }, 200);

  }

  public closeModal(reason?: string) {
    if (!reason) {
      reason = 'close';
    }

    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }

  private _reviewFile (images: any, isNewFile?: boolean) {
    let i = 0;
    let surplus = 0;
    let total = 0;
    const self = this;

    if (isNewFile) {
      total = this.globalFiles.length + images.target.files.length;
    }

    for (const image of images.target.files) {
      if (isNewFile) {
        this.globalFiles.push(image.name);
      }

      const compressor = new ImageCompressor(image, {
        quality: .8,
        maxWidth: 1600,
        maxHeight: 1200,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = (event: any) => {
            if (isNewFile) {
              surplus = total - images.target.files.length;
              const newIndex = surplus + i;

              if (event.target.result) {
                $(`#img-loader-${newIndex}`).addClass('hidden');
                $(`#img-del-${newIndex}`).removeClass('hidden');

                const html = `<img class="w-100 h-100" src="${event.target.result}">`;
                $(`#img-pre-wrp-${newIndex}`).append(html);

                self.filesReader.push({ url: event.target.result });

                if (newIndex < total - 1) {
                  i++;
                }
              }
            } else {
              if (event.target.result) {
                $(`#img-loader-${i}`).addClass('hidden');
                $(`#img-del-${i}`).removeClass('hidden');

                const html = `<img class="w-100 h-100" src="${event.target.result}">`;
                $(`#img-pre-wrp-${i}`).append(html);

                self.filesReader.push({ url: event.target.result });

                if (i < images.target.files.length - 1) {
                  i++;
                }
              }
            }
          };
        },
        error(e) {
          console.log(e.message);
        },
      });
    }
  }

  public removeImgPreview (index) {
    this.globalFiles.splice(index, 1);

    if (this.filesReader[index]) {
      this.filesReader.splice(index, 1);
    }
  }

  public upload() {
    this.filesUpload = [];

    this.filesReader.map((item, index) => {
      const file = this._converBase64.convert(item.url);
      const key = `images[${index}][image]`;

      this.filesUpload.push({key: key, value: file});
    });

    switch (this.mode) {
      case UPLOAD_MODE.CREATE_ALBUM:
        this._createAlbum(this.filesUpload);
        break;
      case UPLOAD_MODE.DETAIL_ALBUM:
        this._uploadImages(this.filesUpload);
        break;
      default:
        break;
    }
  }

  public getPhotos(e: any): void {
    if (!e) {
      return;
    }

    if (this._validatorImage.nameImage(e)) {
      if (this._validatorImage.sizeImage(e)) {
        this._reviewFile(e, true);
      } else {
        this._notifyService.error(ImgValidateMess.size);
      }
    } else {
      this._notifyService.error(ImgValidateMess.name);
    }
  }

  private _uploadImages(filesUpload: any) {
    if (this.isUploading) {
      return;
    }

    this.isUploading = true;

    const params = {
      user_album_id: this.data,
    };

    this._uploader.store('images/store', filesUpload, params)
    .subscribe(res => {
      this._notifyService.success('Thêm ảnh vào album thành công');
      this.closeModal('reload');
      this.isUploading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isUploading = false;
    });
  }

  private _createAlbum(filesUpload: any) {
    if (this.isUploading) {
      return;
    }

    this.isUploading = true;

    const params = {
      title: this.templateAlbum.title,
      description: this.templateAlbum.description,
    };

    this._uploader.store('album/store', filesUpload, params)
    .subscribe(res => {
      this._notifyService.success('Tạo album thành công');
      this.closeModal('reload');
      this.isUploading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isUploading = false;
    });
  }
}
