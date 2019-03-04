import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimepickerModule, TimepickerConfig } from 'ngx-bootstrap/timepicker';

import { VTimepickerComponent } from './v-timepicker.component';
import { TimepickerHelper } from '../../../shared/utils/timepicker-config';

@NgModule({
  imports: [
    CommonModule,
    TimepickerModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    VTimepickerComponent,
  ],
  exports: [
    VTimepickerComponent,
  ],
  providers: [
    { provide: TimepickerConfig,
      useFactory: TimepickerHelper.getTimepickerConfig
    }
  ],
})
export class VTimepickerModule { }
