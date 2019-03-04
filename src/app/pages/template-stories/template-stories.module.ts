import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { TemplateStoriesComponent } from './template-stories.component';
import { ModalCeTempStoryComponent } from './modal-ce/modal-ce.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

import { NotifyService } from '../../../shared/services/notify.service';

const routes: Routes = [
  {
    path: '',
    component: TemplateStoriesComponent,
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
  entryComponents: [
    ModalCeTempStoryComponent,
    ModalDeleteComponent,
  ],
  declarations: [
    TemplateStoriesComponent,
    ModalCeTempStoryComponent,
    ModalDeleteComponent,
  ],
  providers: [
    NotifyService,
  ]
})
export class TemplateStoriesModule { }
