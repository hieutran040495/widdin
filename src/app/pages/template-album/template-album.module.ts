import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { TemplateAlbumComponent } from './template-album.component';
import { ModalDeleteTempAlbumModule } from '../modal-delete-temp-album/modal-delete-temp-album.module';

import { ModalUploadImageModule } from '../modal-upload-image/modal-upload-image.module';

import { TemplateAlbumService } from '../../../shared/services/temp-album.service';
import { ValidatorImage } from '../../../shared/utils/validator-img.service';

import { VImageModule } from '../../../shared/directive/v-image/v-image.module';

const routes: Routes = [
  {
    path: '',
    component: TemplateAlbumComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    VImageModule,
    FormsModule,
    ModalModule.forRoot(),
    ModalUploadImageModule,
    ModalDeleteTempAlbumModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TemplateAlbumComponent,
  ],
  entryComponents: [
  ],
  providers: [
    TemplateAlbumService,
    ValidatorImage,
  ]
})
export class TemplateAlbumModule { }
