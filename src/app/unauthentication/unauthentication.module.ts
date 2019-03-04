import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UnauthenticationComponent } from './unauthentication.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UnauthenticationComponent,
  //   children: [
  //     {
  //       path: 'password\/forgot',
  //       loadChildren: '.\/password-forgot\/password-forgot.module#PasswordForgotModule'
  //     },
  //     {
  //       path: 'password\/setup',
  //       loadChildren: '.\/password-setup\/password-setup.module#PasswordSetupModule'
  //     },
  //     {
  //       path: 'register',
  //       loadChildren: '.\/register\/register.module#RegisterModule'
  //     },
  //     {
  //       path: 'register\/done',
  //       loadChildren: '.\/register-done\/register-done.module#RegisterDoneModule'
  //     },
  //     {
  //       path: 'resend-email',
  //       loadChildren: '.\/resend-email\/resend-email.module#ResendEmailModule'
  //     },
  //     {
  //       path: 'verify-email',
  //       loadChildren: '.\/verify-email\/verify-email.module#VerifyEmailModule'
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    UnauthenticationComponent
  ]
})
export class UnauthenticationModule { }
