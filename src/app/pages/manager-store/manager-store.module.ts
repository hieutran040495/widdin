import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ManagerStoreComponent } from './manager-store.component';
import { ManagerStoreLeftBarComponent } from './left-bar/left-bar.component';

import { VWidgetCategoryModule } from '../../../shared/directive/v-widget-category/v-widget-category.module';

const routes: Routes = [
  {
    path: '',
    component: ManagerStoreComponent,
    children: [
      {
        path: 'infor',
        loadChildren: '..\/store-infor\/store-infor.module#StoreInforModule'
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
    TooltipModule.forRoot(),
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
  ],
  declarations: [
    ManagerStoreComponent,
    ManagerStoreLeftBarComponent,
  ],
  providers: [

  ]
})
export class ManagerStoreModule { }


