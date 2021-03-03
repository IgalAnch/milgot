import { NgModule } from '@angular/core';
import { ArrowComponent } from './arrow.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArrowComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ArrowComponent],
})
export class ArrowModule {}
