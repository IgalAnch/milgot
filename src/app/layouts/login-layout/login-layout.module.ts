import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../sharedmodule/shared.module';
import { LoginLayoutRoutes } from './login-layout.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
    FormsModule,
    SharedModule.forRoot(), //does this even do anything?
  ],
  declarations: [],
})
export class LoginLayoutModule {}
