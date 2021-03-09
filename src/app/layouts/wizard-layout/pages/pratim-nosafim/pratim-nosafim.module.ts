import { NgModule } from '@angular/core';
import { PratimNosafimComponent } from './pratim-nosafim.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const pratimNosafimRoutes: Routes = [
  { path: '', component: PratimNosafimComponent },
];

@NgModule({
  declarations: [PratimNosafimComponent],
  imports: [FormsModule, RouterModule.forChild(pratimNosafimRoutes)],
})
export class LimuudimModule {}
