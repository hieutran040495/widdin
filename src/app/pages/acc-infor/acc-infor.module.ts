import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AccountInforComponent } from './acc-infor.component';

const routes: Routes = [
  {
    path: '',
    component: AccountInforComponent,
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
    AccountInforComponent,
  ],
})
export class AccountInforModule { }

