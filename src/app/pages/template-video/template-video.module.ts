import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { TemplateVideoComponent } from './template-video.component';

import { NotifyService } from '../../../shared/services/notify.service';

const routes: Routes = [
  {
    path: '',
    component: TemplateVideoComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    TemplateVideoComponent,
  ],
  providers: [
    NotifyService,
  ]
})
export class TemplateVideoModule { }
