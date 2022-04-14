import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from 'src/app/features/loan/loan-create/loan-create.component';
import { LoanListComponent } from 'src/app/features/loan/loan-list/loan-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: LoanCreateComponent,
  },
  {
    path: 'list',
    component: LoanListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLoanRoutingModule {}
