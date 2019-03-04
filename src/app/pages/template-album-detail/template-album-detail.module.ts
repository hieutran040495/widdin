import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { TemplateAlbumService } from '../../../shared/services/temp-album.service';
import { TemplateAlbumImagesService } from '../../../shared/services/temp-album-images';
import { ValidatorImage } from '../../../shared/utils/validator-img.service';

import { TemplateAlbumDetailComponent } from './template-album-detail.component';

import { VImageModule } from '../../../shared/directive/v-image/v-image.module';
import { VGalleryModule } from '../../../shared/directive/v-gallery/v-gallery.module';
import { ModalUploadImageModule } from '../modal-upload-image/modal-upload-image.module';
import { ModalDeleteTempAlbumModule } from '../modal-delete-temp-album/modal-delete-temp-album.module';

const routes: Routes = [
  {
    path: '',
    component: TemplateAlbumDetailComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    VImageModule,
    VGalleryModule,
    FormsModule,
    ModalUploadImageModule,
    ModalDeleteTempAlbumModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [
    TemplateAlbumDetailComponent,
  ],
  providers: [
    TemplateAlbumService,
    TemplateAlbumImagesService,
    ValidatorImage,
  ]
})
export class TemplateAlbumDetailModule { }
