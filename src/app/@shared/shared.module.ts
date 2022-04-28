import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongDatePipe } from './pipes/longDate.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';

const COMPONENTS = [LongDatePipe, PaginationComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
