import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import * as clone from 'clone/clone';

import { TemplateAlbum } from '../../../shared/models/temp-album';

import { MODAL } from '../../../shared/enums/modal';
import { IMAGE_MIME } from '../../../shared/enums/file-mime';
import { UPLOAD_MODE } from '../../../shared/enums/upload-mode';
import { ALBUM_MODE } from '../../../shared/enums/album-mode';

import { ImgValidateMess } from '../../../shared/constants/img-validate';

import { TemplateAlbumService } from '../../../shared/services/temp-album.service';
import { TemplateAlbumImagesService } from '../../../shared/services/temp-album-images';
import { NotifyService } from '../../../shared/services/notify.service';
import { ValidatorImage } from '../../../shared/utils/validator-img.service';

import { ModalUploadImageComponent } from '../modal-upload-image/modal-upload-image.component';
import { ModalDeleteAlbumComponent } from '../modal-delete-temp-album/modal-delete-temp-album.component';

@Component({
  selector: 'app-template-album-edit',
  templateUrl: './template-album-edit.component.html',
  styleUrls: ['./template-album-edit.component.scss']
})
export class TemplateAlbumEditComponent implements OnInit {
  public accept_file = IMAGE_MIME.toString();

  public id: number;

  public detailAlbum: TemplateAlbum;

  public isLoading = false;
  public isSubmiting = false;

  constructor(
    private _route: ActivatedRoute,
    private _tempAlbumService: TemplateAlbumService,
    private _tempAlbumImgsService: TemplateAlbumImagesService,
    private _notifyService: NotifyService,
    private _validatorImage: ValidatorImage,
    private _modalService: BsModalService,
    private _router: Router,

  ) { }

  ngOnInit() {
    this.id = +this._route.snapshot.params.id;
    this.detailAlbum = new TemplateAlbum();
    this._getDetailAlbum();
  }

  private _getDetailAlbum() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this._tempAlbumService.showAlbum(this.id)
    .subscribe(res => {
      this.detailAlbum = new TemplateAlbum(res.data);
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }

  public updateAlbum() {
    if (this.isSubmiting) {
      return;
    }

    this.isSubmiting = true;

    this._tempAlbumService.updateAlbum(this.detailAlbum.formDataJSON())
    .subscribe(res => {
      this.detailAlbum = new TemplateAlbum(res.data);
      this.isSubmiting = false;
      this._router.navigate(['/manager-templates/album', this.id]);
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmiting = false;
    });
  }

  public removeImg(imgId: number) {
    if (imgId) {
      const param = {
        id: imgId
      };

      this._tempAlbumImgsService.deleteImages(param)
      .subscribe(res => {
        this.detailAlbum.images = this.detailAlbum.images.filter(item => item.id !== imgId);
      }, errors => {
        this._notifyService.error(errors);
      });
    }
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
            data: this.detailAlbum.id,
            mode: UPLOAD_MODE.DETAIL_ALBUM,
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

  public openDeleteModal() {
    const configs = {
      class: MODAL.SIZE_MD,
      initialState: {
        tempAlbum: clone(this.detailAlbum),
        mode: ALBUM_MODE.DETAIL_ALBUM
      }
    };

    this._openEntryModal(ModalDeleteAlbumComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      switch (reason) {
        case 'reload':
          this._getDetailAlbum();
          break;
        case 'navigate':
        this._router.navigate(['/manager-templates/album']);
          break;
        default:
          break;
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }
}
