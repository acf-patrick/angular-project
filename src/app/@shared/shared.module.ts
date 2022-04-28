import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongDatePipe } from './pipes/longDate.pipe';

@NgModule({
  declarations: [LongDatePipe],
  imports: [CommonModule],
  exports: [LongDatePipe]
})
export class SharedModule {}
