import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from '../../features/header/header.component';
import { LoanModule } from 'src/app/features/loan/loan.module';
import { SidemenuComponent } from 'src/app/features/sidemenu/sidemenu.component';

@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent, SidemenuComponent],
  imports: [CommonModule, PageLayoutRoutingModule, LoanModule],
})
export class PageLayoutModule {}
