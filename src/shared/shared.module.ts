import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ApiService } from './services/api.service';
import { NotifyService } from './services/notify.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      enableHtml: true
    }),
  ],
  providers: [
    NotifyService,
    ApiService,
  ],
})

export class SharedModule { }
