import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';

import { TemplateMaximsComponent } from './template-maxims.component';
import { ModalCeTempMaximsComponent } from './modal-ce/modal-ce.component';
import { ModalDeleteMaximsComponent } from './modal-delete/modal-delete.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateMaximsComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalCeTempMaximsComponent,
    ModalDeleteMaximsComponent,
  ],
  declarations: [
    TemplateMaximsComponent,
    ModalCeTempMaximsComponent,
    ModalDeleteMaximsComponent,
  ]
})
export class TemplateMaximsModule { }
