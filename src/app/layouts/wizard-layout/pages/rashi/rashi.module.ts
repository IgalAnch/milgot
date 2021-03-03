import { NgModule } from '@angular/core';
import { RashiComponent } from './rashi.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const rashiRoutes: Routes = [{ path: '', component: RashiComponent }];

@NgModule({
  declarations: [RashiComponent],
  imports: [FormsModule, RouterModule.forChild(rashiRoutes)],
  //   exports: [RashiComponent, FormsModule],
})
export class RashiModule {}
