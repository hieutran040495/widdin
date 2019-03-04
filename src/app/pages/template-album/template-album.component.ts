import { Component, OnInit } from '@angular/core';
import * as clone from 'clone/clone';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { MODAL } from '../../../shared/enums/modal';

import { TemplateAlbum } from '../../../shared/models/temp-album';

import { ImgValidateMess } from '../../../shared/constants/img-validate';

import { IMAGE_MIME } from '../../../shared/enums/file-mime';
import { UPLOAD_MODE } from '../../../shared/enums/upload-mode';
import { ALBUM_MODE } from '../../../shared/enums/album-mode';

import { TemplateAlbumService } from '../../../shared/services/temp-album.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { ValidatorImage } from '../../../shared/utils/validator-img.service';

import { ModalDeleteAlbumComponent } from '../modal-delete-temp-album/modal-delete-temp-album.component';
import { ModalUploadImageComponent } from '../modal-upload-image/modal-upload-image.component';

@Component({
  selector: 'app-template-album',
  templateUrl: './template-album.component.html',
  styleUrls: ['./template-album.component.scss']
})
export class TemplateAlbumComponent implements OnInit {
  public album: TemplateAlbum[] = [];
  public isLoading = false;
  public accept_file = IMAGE_MIME.toString();

  constructor(
    private _tempAlbumService: TemplateAlbumService,
    private _notifyService: NotifyService,
    private _modalService: BsModalService,
    private _validatorImage: ValidatorImage,
  ) { }

  ngOnInit() {
    this._getAlbum();
  }

  private _getAlbum() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.album = [];

    this._tempAlbumService.getAlbum()
    .subscribe(res => {
      res.data.items.map(item => {
        this.album.push(new TemplateAlbum(item));
      });
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  public getPhotos(e: any): void {
    if (!e) {
      return;
    }

    if (this._validatorImage.nameImage(e)) {
      if (this._validatorImage.sizeImage(e)) {
        const configs = {
          class: MODAL.SIZE_MX,
          initialState: {
            files: e,
            mode: UPLOAD_MODE.CREATE_ALBUM,
          }
        };

        this._openEntryModal(ModalUploadImageComponent, configs);
      } else {
        this._notifyService.error(ImgValidateMess.size);
      }
    } else {
      this._notifyService.error(ImgValidateMess.name);
    }
  }

  public openDeleteModal(tempAlbum: TemplateAlbum) {
    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        tempAlbum: clone(tempAlbum),
        mode: ALBUM_MODE.ALBUM
      }
    };

    this._openEntryModal(ModalDeleteAlbumComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'reload') {
        this._getAlbum();
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }
}
