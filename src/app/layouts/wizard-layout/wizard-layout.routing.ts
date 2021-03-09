import { Routes } from '@angular/router';
// import { LimuudimComponent } from './pages/limuudim/limuudim.component';
// import { PratimNosafimComponent } from './pages/pratim-nosafim/pratim-nosafim.component';
// import { MismahimComponent } from './pages/mismahim/mismahim.component';
// import { NoModuleComponent } from './pages/nomodule/nomodule.component';
// import { FormsModule } from '@angular/forms';
// import { NoModulesModule } from './pages/nomodule/nomodule.module';

export const WizardLayoutRoutes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/rashi/rashi.module').then((file) => file.RashiModule),
  },
  {
    path: 'personal-information',
    loadChildren: () =>
      import('./pages/pratim/pratim.module').then((file) => file.PratimModule),
  },
  {
    path: 'family-status',
    loadChildren: () =>
      import('./pages/family-status/family-status.module').then(
        (file) => file.FamilyStatusModule
      ),
  },
  {
    path: 'more-details',
    loadChildren: () =>
      import('./pages/pratim-nosafim/pratim-nosafim.module').then(
        (file) => file.LimuudimModule
      ),
  },
  {
    path: 'documents',
    loadChildren: () =>
      import('./pages/mismahim/mismahim.module').then(
        (file) => file.MismahimModule
      ),
  },
  {
    path: 'nomodule',
    // component: NoModuleComponent,
    loadChildren: () =>
      import('./pages/nomodule/nomodule.module').then(
        (file) => file.NoModulesModule
      ),
  },
];
