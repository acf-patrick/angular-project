import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longDate',
})
export class LongDatePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): String {
    if (value instanceof Date)
      return `${value}`.slice(4, 15);
    return value;
  }
}
