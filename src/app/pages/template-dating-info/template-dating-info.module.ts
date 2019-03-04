import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateDatingInfoComponent } from './template-dating-info.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDatingInfoComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TemplateDatingInfoComponent,
  ]
})
export class TemplateDatingInfoModule { }
