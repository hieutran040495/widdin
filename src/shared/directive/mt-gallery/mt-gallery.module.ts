import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtGalleryComponent } from './mt-gallery.component';

import { VImageModule } from '../v-image/v-image.module';

@NgModule({
  imports: [
    CommonModule,
    VImageModule,
  ],
  declarations: [
    MtGalleryComponent,
  ],
  exports: [
    MtGalleryComponent,
  ]
})
export class MtGalleryModule { }
