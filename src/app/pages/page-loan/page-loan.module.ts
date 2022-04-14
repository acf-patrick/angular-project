import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoanRoutingModule } from './page-loan-routing.module';
import { LoanModule } from 'src/app/features/loan/loan.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoanModule, PageLoanRoutingModule],
})
export class PageLoanModule {}
