import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VImageComponent } from './v-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VImageComponent
  ],
  exports: [
    VImageComponent,
  ]
})
export class VImageModule { }
