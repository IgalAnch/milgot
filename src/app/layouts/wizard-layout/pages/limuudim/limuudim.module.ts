import { NgModule } from '@angular/core';
import { LimuudimComponent } from './limuudim.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const limuudimRoutes: Routes = [{ path: '', component: LimuudimComponent }];

@NgModule({
  declarations: [LimuudimComponent],
  imports: [FormsModule, RouterModule.forChild(limuudimRoutes)],
})
export class LimuudimModule {}
