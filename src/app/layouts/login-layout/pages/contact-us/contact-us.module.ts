import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const ContactUsRoutes: Routes = [{ path: '', component: ContactUsComponent }];
@NgModule({
  declarations: [ContactUsComponent],
  imports: [FormsModule, RouterModule.forChild(ContactUsRoutes)],
})
export class ContactUsModule {}
