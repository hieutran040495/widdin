import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDeleteAlbumComponent } from './modal-delete-temp-album.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModalDeleteAlbumComponent,
  ],
  entryComponents: [
    ModalDeleteAlbumComponent,
  ],
  exports: [
    ModalDeleteAlbumComponent,
  ]
})
export class ModalDeleteTempAlbumModule { }
