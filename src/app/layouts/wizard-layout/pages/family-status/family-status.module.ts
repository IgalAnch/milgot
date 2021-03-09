import { NgModule } from '@angular/core';
import { FamilyStatusComponent } from './family-status.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const familyStatusRoutes: Routes = [
  { path: '', component: FamilyStatusComponent },
];

@NgModule({
  declarations: [FamilyStatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(familyStatusRoutes),
  ],
})
export class FamilyStatusModule {}
