import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WizardLayoutRoutes } from './wizard-layout.routing';
import { FormsModule } from '@angular/forms';
import { WizardModule } from './wizard/wizard.module';
import { NoModuleComponent } from './pages/nomodule/nomodule.component';
import { SharedModule } from '../../sharedmodule/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WizardLayoutRoutes),
    FormsModule,
    WizardModule,
    SharedModule.forRoot(),
  ],
  declarations: [],
})
export class WizardLayoutModule {}
