import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

import { MasterTemplatesComponent } from './master-templates.component';

import { MasterTemplateService } from '../../../shared/services/master-template.service';
import { UserTemplateService } from '../../../shared/services/user-template.service';

import { VImageModule } from '../../../shared/directive/v-image/v-image.module';
import { VPreviewGalleryModule } from '../../../shared/directive/v-preview-gallery/v-preview-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: MasterTemplatesComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PaginationModule.forRoot(),
    VImageModule,
    VPreviewGalleryModule,
  ],
  declarations: [
    MasterTemplatesComponent,
  ],
  providers: [
    MasterTemplateService,
    UserTemplateService,
  ]
})
export class MasterTemplatesModule { }
