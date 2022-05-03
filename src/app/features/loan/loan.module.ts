import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCreateComponent } from './loan-create/loan-create.component';
import { LoanListComponent } from './loan-list/loan-list.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanCreateComponent, LoanListComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule,FormsModule],
  exports: [
    LoanCreateComponent,
    LoanListComponent
  ]
})
export class LoanModule {}
