import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { TemplateRSVPComponent } from './template-rsvp.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateRSVPComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
  ],
  declarations: [
    TemplateRSVPComponent,
  ],
  providers: [
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'Custom not found'
      }
    },
  ]
})
export class TemplateRSVPModule { }
