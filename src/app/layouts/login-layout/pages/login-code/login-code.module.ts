import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCodeComponent } from './login-code.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const LoginCodeRoutes: Routes = [{ path: '', component: LoginCodeComponent }];

@NgModule({
  declarations: [LoginCodeComponent],
  imports: [FormsModule, RouterModule.forChild(LoginCodeRoutes)],
  exports: [],
})
export class LoginCodeModule {}
