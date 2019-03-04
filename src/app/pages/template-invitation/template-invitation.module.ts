import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TemplateInvitationComponent } from './template-invitation.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateInvitationComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [
    TemplateInvitationComponent,
  ],
  providers: [
  ]
})
export class TemplateInvitationModule { }
