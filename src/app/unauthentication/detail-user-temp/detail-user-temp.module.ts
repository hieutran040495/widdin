import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailUserTemplateComponent } from './detail-user-temp.component';

const routes: Routes = [
  {
    path: '',
    component: DetailUserTemplateComponent,
    children: [
      {
        path: 'm-temp-1',
        loadChildren: '.\/m-template01\/m-template01.module#MasterTemplate01Module'
      },
      {
        path: 'm-temp-2',
        loadChildren: '.\/m-template02\/m-template02.module#MasterTemplate02Module'
      },
      {
        path: 'm-temp-3',
        loadChildren: '.\/m-template03\/m-template03.module#MasterTemplate03Module'
      },
      {
        path: 'm-temp-4',
        loadChildren: '.\/m-template04\/m-template04.module#MasterTemplate04Module'
      },
      {
        path: '**',
        redirectTo: '/page-not-found',
        pathMatch: 'full',
      },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DetailUserTemplateComponent,
  ],
})
export class DetailUserTemplateModule { }
