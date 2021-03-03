import { NgModule } from '@angular/core';
import { WizardComponent } from './wizard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArrowModule } from './arrow/arrow.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FormsModule, CommonModule, ArrowModule, RouterModule],
  declarations: [WizardComponent],
  exports: [WizardComponent],
})
export class WizardModule {}
