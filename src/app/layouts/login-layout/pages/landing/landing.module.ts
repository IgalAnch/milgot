import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const LandingRoutes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  declarations: [LandingComponent],
  imports: [FormsModule, RouterModule.forChild(LandingRoutes)],
  exports: [],
})
export class LandingModule {}
