import { NgModule } from '@angular/core';
import { PratimComponent } from './pratim.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const pratimRoutes: Routes = [{ path: '', component: PratimComponent }];

@NgModule({
  declarations: [PratimComponent],
  imports: [FormsModule, RouterModule.forChild(pratimRoutes)],
  //   exports: [PratimComponent, FormsModule],
})
export class PratimModule {}
