import { NgModule } from '@angular/core';
import { MismahimComponent } from './mismahim.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const mismahimRoutes: Routes = [{ path: '', component: MismahimComponent }];

@NgModule({
  declarations: [MismahimComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(mismahimRoutes)],
})
export class MismahimModule {}
