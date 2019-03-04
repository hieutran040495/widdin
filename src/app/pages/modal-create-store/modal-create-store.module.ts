import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalCreateStoreComponent } from './modal-create-store.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModalCreateStoreComponent,
  ],
  entryComponents: [
    ModalCreateStoreComponent,
  ],
  exports: [
    ModalCreateStoreComponent,
  ]
})
export class ModalCreateStoreModule { }
