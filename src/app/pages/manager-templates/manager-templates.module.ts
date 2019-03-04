
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ManagerTemplatesComponent } from './manager-templates.component';

import { VArchiveBoxModule } from '../../../shared/directive/v-archive-box/v-archive-box.module';
import { VWidgetCategoryModule } from '../../../shared/directive/v-widget-category/v-widget-category.module';

const routes: Routes = [
  {
    path: '',
    component: ManagerTemplatesComponent,
    children: [
      {
        path: 'invitation',
        loadChildren: '..\/template-invitation\/template-invitation.module#TemplateInvitationModule'
      },
      // {
      //   path: 'dating-info',
      //   loadChildren: '..\/template-dating-info\/template-dating-info.module#TemplateDatingInfoModule'
      // },
      {
        path: 'couple-info',
        loadChildren: '..\/template-couple-info\/template-couple-info.module#TemplateCoupleInfoModule'
      },
      {
        path: 'stories',
        loadChildren: '..\/template-stories\/template-stories.module#TemplateStoriesModule'
      },
      {
        path: 'maxims',
        loadChildren: '..\/template-maxims\/template-maxims.module#TemplateMaximsModule'
      },
      {
        path: 'events',
        loadChildren: '..\/template-events\/template-events.module#TemplateEventsModule'
      },
      {
        path: 'rsvp',
        loadChildren: '..\/template-rsvp\/template-rsvp.module#TemplateRSVPModule'
      },
      {
        path: 'music',
        loadChildren: '..\/template-music\/template-music.module#TemplateMusicModule'
      },
      {
        path: 'user-templates',
        loadChildren: '..\/user-templates\/user-templates.module#UserTemplatesModule'
      },
      {
        path: 'album',
        loadChildren: '..\/template-album\/template-album.module#TemplateAlbumModule'
      },
      {
        path: 'album\/:id',
        loadChildren: '..\/template-album-detail\/template-album-detail.module#TemplateAlbumDetailModule'
      },
      {
        path: 'album\/edit\/:id',
        loadChildren: '..\/template-album-edit\/template-album-edit.module#TemplateAlbumEditModule'
      },
      {
        path: 'slide',
        loadChildren: '..\/template-slide\/template-slide.module#TemplateSlideModule'
      },
      {
        path: 'video',
        loadChildren: '..\/template-video\/template-video.module#TemplateVideoModule'
      },
      {
        path: '',
        redirectTo: 'couple-info',
        pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    RouterModule.forChild(routes),
    VArchiveBoxModule,
    VWidgetCategoryModule,
  ],
  declarations: [
    ManagerTemplatesComponent,
  ]
})
export class ManagerTemplatesModule { }
