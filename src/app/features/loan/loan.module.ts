import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCreateComponent } from './loan-create/loan-create.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanCreateComponent, LoanListComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [LoanCreateComponent, LoanListComponent],
})
export class LoanModule {}
