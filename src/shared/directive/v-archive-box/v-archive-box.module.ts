import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VArchiveBoxComponent } from './v-archive-box.component';
import { ArchiveBoxHelper } from './v-archive-box.helper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    VArchiveBoxComponent,
  ],
  exports: [
    VArchiveBoxComponent,
  ],
  providers: [
    ArchiveBoxHelper,
  ]
})
export class VArchiveBoxModule { }
