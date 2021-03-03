import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { WizardLayoutComponent } from './layouts/wizard-layout/wizard-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
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
    redirectTo: 'student',
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
