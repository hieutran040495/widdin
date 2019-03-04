import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './app.component';

import { ApiService } from '../shared/services/api.service';
import { AuthGuard } from './guards/auth.guard';
import { RootScopeService } from './services/root-scope';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ApiService,
    RootScopeService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
