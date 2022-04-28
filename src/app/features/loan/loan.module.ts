import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCreateComponent } from './loan-create/loan-create.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [LoanCreateComponent, LoanListComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoanCreateComponent, LoanListComponent],
})
export class LoanModule {}
