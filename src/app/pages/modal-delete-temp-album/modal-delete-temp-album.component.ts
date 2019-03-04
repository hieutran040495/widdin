import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { TemplateAlbum } from '../../../shared/models/temp-album';

import { TemplateAlbumService } from '../../../shared/services/temp-album.service';
import { NotifyService } from '../../../shared/services/notify.service';

import { ALBUM_MODE } from '../../../shared/enums/album-mode';

@Component({
  selector: 'app-modal-delete-album',
  templateUrl: './modal-delete-temp-album.component.html',
  styleUrls: ['./modal-delete-temp-album.component.scss']
})
export class ModalDeleteAlbumComponent implements OnInit {
  public tempAlbum: TemplateAlbum;
  public mode: string;

  public isSubmitting = false;

  constructor(
    private _bsModalService: BsModalService,
    private _bsModalRef: BsModalRef,
    private _tempAlbumService: TemplateAlbumService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
  }

  public deleteEvent() {
    const data = {
      id: this.tempAlbum.id
    };
    this._tempAlbumService.deleteAlbum(data)
    .subscribe(res => {
      this._notifyService.success('Xóa album thành công');
      this.isSubmitting = false;
      if (this.mode === ALBUM_MODE.ALBUM) {
        this.closeModal('reload');
      } else {
        this.closeModal('navigate');
      }
    }, errors => {
      this._notifyService.error(errors);
      this.isSubmitting = false;
    });
  }

  public closeModal (reason?: string) {
    this._bsModalService.setDismissReason(reason);
    this._bsModalRef.hide();
  }
}
