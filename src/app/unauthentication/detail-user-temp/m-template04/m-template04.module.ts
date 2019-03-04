import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { MasterTemplate04Component } from './m-template04.component';
import { HeaderMasterTemplate04Component } from './header/header.component';
import { SliderMasterTemplate04Component } from './slider/slider.component';
import { StoryMasterTemplate04Component } from './story/story.component';
import { CountdownMasterTemplate04Component } from './count-down/count-down.component';
import { EventMasterTemplate04Component } from './event/event.component';
import { RsvpMasterTemplate04Component } from './rsvp/rsvp.component';
import { GalleryMasterTemplate04Component } from './gallery/gallery.component';
import { InforMasterTemplate04Component } from './infor/infor.component';
import { MaximMasterTemplate04ComponentComponent } from './maxim/maxim.component';
import { FooterMasterTemplate04Component } from './footer/footer.component';

import { ScriptLoaderService } from '../../../../shared/utils/script-loader.service';

import { MtCountDownModule } from '../../../../shared/directive/mt-count-down/mt-count-down.module';
import { MtGalleryModule } from '../../../../shared/directive/mt-gallery/mt-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: MasterTemplate04Component,
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
    MasterTemplate04Component,
    HeaderMasterTemplate04Component,
    SliderMasterTemplate04Component,
    StoryMasterTemplate04Component,
    CountdownMasterTemplate04Component,
    EventMasterTemplate04Component,
    RsvpMasterTemplate04Component,
    GalleryMasterTemplate04Component,
    FooterMasterTemplate04Component,
    InforMasterTemplate04Component,
    MaximMasterTemplate04ComponentComponent,
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
export class MasterTemplate04Module { }
