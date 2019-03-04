import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ModalCropImageComponent } from './modal-crop-image.component';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
  ],
  declarations: [
    ModalCropImageComponent,
  ],
  entryComponents: [
    ModalCropImageComponent,
  ],
  exports: [
    ModalCropImageComponent,
  ]
})
export class ModalCropImageModule { }
