import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanCreateComponent } from './features/loan/loan-create/loan-create.component';
import { LoanListComponent } from './features/loan/loan-list/loan-list.component';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanCreateComponent,
    LoanListComponent,
    PageLayoutComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
