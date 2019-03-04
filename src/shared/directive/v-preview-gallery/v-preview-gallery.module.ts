import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VPreviewGalleryComponent } from './v-preview-gallery.component';

// import { VImageModule } from '../v-image/v-image.module';

@NgModule({
  imports: [
    CommonModule,
    // VImageModule,
  ],
  declarations: [
    VPreviewGalleryComponent,
  ],
  exports: [
    VPreviewGalleryComponent,
  ]
})
export class VPreviewGalleryModule { }
