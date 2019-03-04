import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

// import { UserGuard } from 'app/guards/user.guard';
// import { AuthService } from 'shared/services/auth.service';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: '.\/unauthentication\/login\/user-login.module#UserLoginModule'
  // },
  {
    path: 'templates\/:id',
    loadChildren: '.\/unauthentication\/detail-user-temp\/detail-user-temp.module#DetailUserTemplateModule'
  },
  {
    path: 'page-not-found',
    loadChildren: '.\/unauthentication\/page-not-found\/page-not-found.module#PageNotFoundModule'
  },
  {
    path: '',

    // canActivateChild: [AuthGuard],
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    // AuthGuard,
    // UserGuard,
    // AuthService,
  ]
})
export class AppRoutingModule { }
