import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';

import { TemplateMusicComponent } from './template-music.component';
// import { ModalCreateRSVPComponent } from './modal-create/modal-create.component';

import { VImageModule } from '../../../shared/directive/v-image/v-image.module';

const routes: Routes = [
  {
    path: '',
    component: TemplateMusicComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VImageModule,
    RouterModule.forChild(routes),
    // ModalModule.forRoot(),
  ],
  entryComponents: [
    // ModalCreateRSVPComponent,
  ],
  declarations: [
    TemplateMusicComponent,
    // ModalCreateRSVPComponent,
  ],
  providers: [
  ]
})
export class TemplateMusicModule { }

