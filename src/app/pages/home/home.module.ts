import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';

import { PostService } from '../../../shared/services/post.service';

import { VImageModule } from '../../../shared/directive/v-image/v-image.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    VImageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
  ],
  providers: [
    PostService,
  ]
})
export class HomeModule { }
