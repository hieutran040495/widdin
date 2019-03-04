import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { TemplateCoupleService } from '../../../shared/services/temp-couple.service';
import { UploaderService } from '../../../shared/utils/upload.service';
import { NotifyService } from '../../../shared/services/notify.service';

import { Regexs } from '../../../shared/constants/regex';
import { ImgValidateMess, AvatarDimension } from '../../../shared/constants/img-validate';

import { IMAGE_MIME } from '../../../shared/enums/file-mime';

import { ValidatorImage } from '../../../shared/utils/validator-img.service';
import { ConvertBase64ToFile } from '../../../shared/utils/convert-data-url';

import { MODAL } from '../../../shared/enums/modal';

import { TemplateCouple } from '../../../shared/models/temp-couple';

import { ModalCropImageComponent } from '../modal-crop-image/modal-crop-image.component';

@Component({
  selector: 'app-template-couple-info',
  templateUrl: './template-couple-info.component.html',
  styleUrls: ['./template-couple-info.component.scss']
})
export class TemplateCoupleInfoComponent implements OnInit {
  public rules = Regexs;
  public accept_file = IMAGE_MIME.toString();

  public tempCouple: TemplateCouple;

  public isLoading = false;
  public isSumitting = false;
  public hasInfo = false;

  private filesUpload: any = [];

  constructor(
    private _tempCoupleService: TemplateCoupleService,
    private _modalService: BsModalService,
    private _notifyService: NotifyService,
    private _validatorImage: ValidatorImage,
    private _convertBase64: ConvertBase64ToFile,
    private _uploader: UploaderService,

  ) { }

  ngOnInit() {
    this._getCouple();
  }

  private _getCouple() {
    this.isLoading = true;
    this.tempCouple = new TemplateCouple();

    this._tempCoupleService.getCouple()
    .subscribe(res => {
      this.tempCouple = new TemplateCouple(res.data);
      this.isLoading = false;
    }, errors => {
      this.isLoading = false;
    });
  }

  public updateCoupleInfo() {
    if (this.isSumitting) {
      return;
    }

    this.isSumitting = true;

    this._uploader.store('couples/update', this.filesUpload, this.tempCouple.toJSON())
    .subscribe(res => {
      this._notifyService.success('Cập nhật thông tin cặp đôi thành công');
      this.isSumitting = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isSumitting = false;
    });
  }

  public createCoupleInfo() {
    if (this.isSumitting) {
      return;
    }

    this.isSumitting = true;

    this._tempCoupleService.createCouple(this.tempCouple.toJSON())
    .subscribe(res => {
      this._notifyService.success('Tạo thông tin cặp đôi thành công');
      this.isSumitting = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isSumitting = false;
    });
  }

  public getAvatar(e: any, tagId: string): void {
    if (!e) {
      return;
    }

    const loaderId = $(`#loader_${tagId}`);

    if (this._validatorImage.nameImage(e)) {
      if (this._validatorImage.sizeImage(e)) {
        let dimension;
        loaderId.removeClass('hidden');

        this._validatorImage.dimensionImage(e, AvatarDimension.width, AvatarDimension.height, function(result) {
          dimension = result;
        });

        setTimeout(() => {
          if (dimension) {
            const configs = {
              class: MODAL.SIZE_LG,
              initialState: {
                imageChangedEvent: e,
                tagId: tagId,
              }
            };

            this._openEntryModal(ModalCropImageComponent, configs);
            loaderId.addClass('hidden');
          } else {
            this._notifyService.error(ImgValidateMess.avatar_dimension);
            loaderId.addClass('hidden');
          }
        }, 200);
      } else {
        this._notifyService.error(ImgValidateMess.size);
      }
    } else {
      this._notifyService.error(ImgValidateMess.name);
    }
  }


  private _openEntryModal(comp, configs?: ModalOptions) {
    const bsModalRef = this._modalService.show(comp, configs);

    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'cropped') {
        const imgCropped = {
          key: bsModalRef.content.tagId,
          value: this._convertBase64.convert(bsModalRef.content.croppedImage),
        };

        if (this.filesUpload.length > 0) {
          const result = this.filesUpload.findIndex(item => imgCropped.key === item.key);

          if (result <= -1) {
            this.filesUpload.push(imgCropped);
          } else {

            this.filesUpload[result].value = imgCropped.value;
          }
        } else {
          this.filesUpload.push(imgCropped);
        }
      }

      _subscribe.unsubscribe();
    });
  }
}
