import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { WizardLayoutComponent } from './layouts/wizard-layout/wizard-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'student',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/login-layout/login-layout.module').then(
            (m) => m.LoginLayoutModule
          ),
      },
    ],
  },
  {
    path: 'student',
    component: WizardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/wizard-layout/wizard-layout.module').then(
            (m) => m.WizardLayoutModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes /*, { useHash: true }*/),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
