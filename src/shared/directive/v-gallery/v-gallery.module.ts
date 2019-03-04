import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VGalleryComponent } from './v-gallery.component';

import { VImageModule } from '../v-image/v-image.module';
import { VPreviewGalleryModule } from '../v-preview-gallery/v-preview-gallery.module';

@NgModule({
  imports: [
    CommonModule,
    VImageModule,
    VPreviewGalleryModule,
  ],
  declarations: [
    VGalleryComponent,
  ],
  exports: [
    VGalleryComponent,
  ]
})
export class VGalleryModule { }
