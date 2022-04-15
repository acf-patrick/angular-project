import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const components = [HeaderComponent, SidemenuComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, LayoutRoutingModule],
  exports: components,
})
export class LayoutModule {}
