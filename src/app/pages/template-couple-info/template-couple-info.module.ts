import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TemplateCoupleInfoComponent } from './template-couple-info.component';

import { ModalCropImageModule } from '../modal-crop-image/modal-crop-image.module';

import { ValidatorImage } from '../../../shared/utils/validator-img.service';
import { ConvertBase64ToFile } from '../../../shared/utils/convert-data-url';

import { UploaderService } from '../../../shared/utils/upload.service';

const routes: Routes = [
  {
    path: '',
    component: TemplateCoupleInfoComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    ModalCropImageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TemplateCoupleInfoComponent,
  ],
  providers: [
    ValidatorImage,
    ConvertBase64ToFile,
    UploaderService,
  ]
})
export class TemplateCoupleInfoModule { }
