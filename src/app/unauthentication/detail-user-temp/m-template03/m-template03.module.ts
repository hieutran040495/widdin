import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { MasterTemplate03Component } from './m-template03.component';
import { HeaderMasterTemplate03Component } from './header/header.component';
import { SliderMasterTemplate03Component } from './slider/slider.component';
import { StoryMasterTemplate03Component } from './story/story.component';
import { CountdownMasterTemplate03Component } from './count-down/count-down.component';
import { EventMasterTemplate03Component } from './event/event.component';
import { RsvpMasterTemplate03Component } from './rsvp/rsvp.component';
import { GalleryMasterTemplate03Component } from './gallery/gallery.component';
import { FooterMasterTemplate03Component } from './footer/footer.component';

import { ScriptLoaderService } from '../../../../shared/utils/script-loader.service';

import { MtCountDownModule } from '../../../../shared/directive/mt-count-down/mt-count-down.module';
import { MtGalleryModule } from '../../../../shared/directive/mt-gallery/mt-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: MasterTemplate03Component,
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
    MasterTemplate03Component,
    HeaderMasterTemplate03Component,
    SliderMasterTemplate03Component,
    StoryMasterTemplate03Component,
    CountdownMasterTemplate03Component,
    EventMasterTemplate03Component,
    RsvpMasterTemplate03Component,
    GalleryMasterTemplate03Component,
    FooterMasterTemplate03Component,
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
export class MasterTemplate03Module { }
