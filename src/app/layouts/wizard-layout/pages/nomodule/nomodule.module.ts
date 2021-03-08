import { NgModule } from '@angular/core';
import { NoModuleComponent } from './nomodule.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const nomoduleRoutes: Routes = [{ path: '', component: NoModuleComponent }];

@NgModule({
  declarations: [NoModuleComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(nomoduleRoutes)],
  //exports: [RouterModule],
})
export class NoModulesModule {}
