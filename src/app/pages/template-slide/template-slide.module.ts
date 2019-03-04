import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';

import { TemplateSlideComponent } from './template-slide.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateSlideComponent,
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
  ],
  declarations: [
    TemplateSlideComponent,
  ],
  providers: [
  ]
})
export class TemplateSlideModule { }
