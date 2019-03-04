import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StoreInforComponent } from './store-infor.component';

const routes: Routes = [
  {
    path: '',
    component: StoreInforComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
  ],
  declarations: [
    StoreInforComponent,
  ],
})
export class StoreInforModule { }

