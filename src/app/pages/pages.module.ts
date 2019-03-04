import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { LoginComponent } from '../common/login/login.component';
import { LogoutComponent } from '../common/logout/logout.component';
import { PagesComponent } from './pages.component';
// import { ModalCreateStoreComponent } from './modal-create-store/modal-create-store.component';
import { ModalCreateStoreModule } from './modal-create-store/modal-create-store.module';

import { RootScopeService } from '../services/root-scope';
import { NotifyService } from '../../shared/services/notify.service';
import { AuthService } from '../../shared/services/auth.service';

import { AuthGuard } from '../guards/auth.guard';

import { VArchiveBoxModule } from '../../shared/directive/v-archive-box/v-archive-box.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        // canActivateChild: [AuthGuard],
        loadChildren: '.\/home\/home.module#HomeModule'
      },
      {
        path: 'templates',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: '.\/master-templates\/master-templates.module#MasterTemplatesModule',
        data: {
          breadcrumb: 'templates'
        },
      },
      {
        path: 'stores',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: '.\/stores\/stores.module#StoresModule'
      },
      {
        path: 'stores\/:id',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: '.\/manager-store\/manager-store.module#ManagerStoreModule',
      },
      {
        path: 'manager-templates',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: '.\/manager-templates\/manager-templates.module#ManagerTemplatesModule'
      },
      {
        path: 'account',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: '.\/manager-account\/manager-account.module#ManagerAccountModule'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VArchiveBoxModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    ModalCreateStoreModule,
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  entryComponents: [
    LoginComponent,
    LogoutComponent,
  ],
  providers: [
    RootScopeService,
    AuthService,
    NotifyService,
  ]
})
export class PagesModule { }
