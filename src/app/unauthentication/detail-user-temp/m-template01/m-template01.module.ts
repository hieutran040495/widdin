import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { MasterTemplate01Component } from './m-template01.component';
import { HeaderMasterTemplate01Component } from './header/header.component';
import { SliderMasterTemplate01Component } from './slider/slider.component';
import { StoryMasterTemplate01Component } from './story/story.component';
import { CountdownMasterTemplate01Component } from './count-down/count-down.component';
import { EventMasterTemplate01Component } from './event/event.component';
import { RsvpMasterTemplate01Component } from './rsvp/rsvp.component';
import { GalleryMasterTemplate01Component } from './gallery/gallery.component';
import { FooterMasterTemplate01Component } from './footer/footer.component';

import { ScriptLoaderService } from '../../../../shared/utils/script-loader.service';

import { MtCountDownModule } from '../../../../shared/directive/mt-count-down/mt-count-down.module';
import { MtGalleryModule } from '../../../../shared/directive/mt-gallery/mt-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: MasterTemplate01Component,
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
    MasterTemplate01Component,
    HeaderMasterTemplate01Component,
    SliderMasterTemplate01Component,
    StoryMasterTemplate01Component,
    CountdownMasterTemplate01Component,
    EventMasterTemplate01Component,
    RsvpMasterTemplate01Component,
    GalleryMasterTemplate01Component,
    FooterMasterTemplate01Component,
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
export class MasterTemplate01Module { }
