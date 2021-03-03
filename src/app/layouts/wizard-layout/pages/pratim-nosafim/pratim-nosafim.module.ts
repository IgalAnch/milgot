import { NgModule } from '@angular/core';
import { PratimNosafimComponent } from './pratim-nosafim.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const pratimNosafimRoutes: Routes = [
  { path: '', component: PratimNosafimComponent },
];

@NgModule({
  declarations: [PratimNosafimComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pratimNosafimRoutes),
  ],
})
export class PratimNosafimModule {}
