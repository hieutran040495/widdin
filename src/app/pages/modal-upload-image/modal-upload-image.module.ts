import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalUploadImageComponent } from './modal-upload-image.component';
import { VImageModule } from '../../../shared/directive/v-image/v-image.module';

import { UploaderService } from '../../../shared/utils/upload.service';
import { ValidatorImage } from '../../../shared/utils/validator-img.service';

import { ConvertBase64ToFile } from '../../../shared/utils/convert-data-url';

@NgModule({
  imports: [
    CommonModule,
    VImageModule,
    FormsModule,
  ],
  declarations: [
    ModalUploadImageComponent,
  ],
  entryComponents: [
    ModalUploadImageComponent,
  ],
  exports: [
    ModalUploadImageComponent,
  ],
  providers: [
    ConvertBase64ToFile,
    UploaderService,
    ValidatorImage,
  ]
})
export class ModalUploadImageModule { }
