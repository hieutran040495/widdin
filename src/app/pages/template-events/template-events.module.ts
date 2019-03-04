import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { VTimepickerModule } from '../../../shared/directive/v-timepicker/v-timepicker.module';

import { TemplateEventsComponent } from './template-events.component';
import { ModalCeTempEventComponent } from './modal-ce/modal-ce.component';
import { ModalDeleteEventComponent } from './modal-delete/modal-delete.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateEventsComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VTimepickerModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  entryComponents: [
    ModalCeTempEventComponent,
    ModalDeleteEventComponent,
  ],
  declarations: [
    TemplateEventsComponent,
    ModalCeTempEventComponent,
    ModalDeleteEventComponent,
  ],
})
export class TemplateEventsModule { }
