import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UserTemplateService } from '../../../shared/services/user-template.service';

import { UserTemplatesComponent } from './user-templates.component';

import { VImageModule } from '../../../shared/directive/v-image/v-image.module';

const routes: Routes = [
  {
    path: '',
    component: UserTemplatesComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    VImageModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    UserTemplatesComponent,
  ],
  providers: [
    UserTemplateService,
  ]
})
export class UserTemplatesModule { }
