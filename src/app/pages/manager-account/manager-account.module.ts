import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ManagerAccountComponent } from './manager-account.component';
import { ManagerAccountLeftBarComponent } from './left-bar/left-bar.component';

import { VWidgetCategoryModule } from '../../../shared/directive/v-widget-category/v-widget-category.module';

const routes: Routes = [
  {
    path: '',
    component: ManagerAccountComponent,
    children: [
      {
        path: 'infor',
        loadChildren: '..\/acc-infor\/acc-infor.module#AccountInforModule'
      },
      // {
      //   path: 'setting',
      //   loadChildren: '..\/store-setting\/store-setting.module#StoreSettingModule'
      // },
      // {
      //   path: 'album',
      //   loadChildren: '..\/store-album\/store-album.module#StoreAlbumModule'
      // },
      // {
      //   path: 'video',
      //   loadChildren: '..\/store-video\/store-video.module#StoreVideoModule'
      // },
      {
        path: '',
        redirectTo: 'infor',
        pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    VWidgetCategoryModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ManagerAccountComponent,
    ManagerAccountLeftBarComponent,
  ],
  providers: [
  ]
})
export class ManagerAccountModule { }


