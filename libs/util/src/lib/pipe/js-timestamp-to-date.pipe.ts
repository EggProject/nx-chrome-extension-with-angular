import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsTimestampToDate',
  standalone: true,
})
export class JsTimestampToDatePipe implements PipeTransform {
  transform(value: number): Date {
    return new Date(value);
  }
}
