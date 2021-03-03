import { NgModule } from '@angular/core';
import { MismahimComponent } from './mismahim.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const mismahimRoutes: Routes = [{ path: '', component: MismahimComponent }];

@NgModule({
  declarations: [MismahimComponent],
  imports: [FormsModule, RouterModule.forChild(mismahimRoutes)],
})
export class MismahimModule {}
