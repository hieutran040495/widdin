import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { MasterTemplate02Component } from './m-template02.component';
import { HeaderMasterTemplate02Component } from './header/header.component';
import { SliderMasterTemplate02Component } from './slider/slider.component';
import { StoryMasterTemplate02Component } from './story/story.component';
import { CountdownMasterTemplate02Component } from './count-down/count-down.component';
import { EventMasterTemplate02Component } from './event/event.component';
import { RsvpMasterTemplate02Component } from './rsvp/rsvp.component';
import { GalleryMasterTemplate02Component } from './gallery/gallery.component';
import { InforMasterTemplate02Component } from './infor/infor.component';
import { FooterMasterTemplate02Component } from './footer/footer.component';

import { ScriptLoaderService } from '../../../../shared/utils/script-loader.service';

import { MtCountDownModule } from '../../../../shared/directive/mt-count-down/mt-count-down.module';
import { MtGalleryModule } from '../../../../shared/directive/mt-gallery/mt-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: MasterTemplate02Component,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forChild(routes),
    MtCountDownModule,
    MtGalleryModule,
    ScrollToModule.forRoot()

  ],
  declarations: [
    MasterTemplate02Component,
    HeaderMasterTemplate02Component,
    SliderMasterTemplate02Component,
    StoryMasterTemplate02Component,
    CountdownMasterTemplate02Component,
    EventMasterTemplate02Component,
    RsvpMasterTemplate02Component,
    GalleryMasterTemplate02Component,
    FooterMasterTemplate02Component,
    InforMasterTemplate02Component,
  ],
  providers: [
    ScriptLoaderService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'Không tìm thấy'
      }
    }
  ]
})
export class MasterTemplate02Module { }
