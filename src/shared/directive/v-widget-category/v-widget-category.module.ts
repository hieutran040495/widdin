import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { VWidgetCategoryComponent } from './v-widget-category.component';

const routes: Routes = [
  {
    path: '',
    component: VWidgetCategoryComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forChild(routes),
  ],
  declarations: [
    VWidgetCategoryComponent,
  ],
  exports: [
    VWidgetCategoryComponent,
  ],
})
export class VWidgetCategoryModule { }
