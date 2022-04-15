import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { LoanModule } from 'src/app/features/loan/loan.module';
import { PageLoanModule } from '../page-loan/page-loan.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, PageLoanModule, PageLayoutRoutingModule, LoanModule],
})
export class PageLayoutModule {}
