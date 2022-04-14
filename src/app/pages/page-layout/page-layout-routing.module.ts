import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: PageLayoutComponent
  } ,{
    path: "loan",
    loadChildren: () => import('../page-loan/page-loan.module')
      .then(module => module.PageLoanModule)
  }, {
    path: 'not-found',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLayoutRoutingModule {}
