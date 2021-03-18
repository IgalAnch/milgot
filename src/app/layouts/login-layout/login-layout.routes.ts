import { Routes } from '@angular/router';

export const LoginLayoutRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.module').then(
        (file) => file.LandingModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((file) => file.LoginModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then(
        (file) => file.ContactUsModule
      ),
  },
  {
    path: 'code',
    loadChildren: () =>
      import('./pages/login-code/login-code.module').then(
        (file) => file.LoginCodeModule
      ),
  },
];
