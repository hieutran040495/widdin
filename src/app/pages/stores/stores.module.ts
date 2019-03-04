import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StoresComponent } from './stores.component';
import { StoresLeftBarComponent } from './left-bar/left-bar.component';

import { StoreService } from '../../../shared/services/store.service';

import { VWidgetCategoryModule } from '../../../shared/directive/v-widget-category/v-widget-category.module';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VWidgetCategoryModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
  ],
  declarations: [
    StoresComponent,
    StoresLeftBarComponent,
  ],
  providers: [
    StoreService,
  ]
})
export class StoresModule { }

