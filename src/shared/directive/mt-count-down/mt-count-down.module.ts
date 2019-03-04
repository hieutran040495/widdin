import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtCountDownComponent } from './mt-count-down.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MtCountDownComponent,
  ],
  exports: [
    MtCountDownComponent,
  ]
})
export class MtCountDownModule { }
