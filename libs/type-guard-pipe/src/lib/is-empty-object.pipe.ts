import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmptyObject',
  standalone: true,
})
export class IsEmptyObjectPipe implements PipeTransform {
  transform(value: Record<string, unknown>): boolean {
    return Object.keys(value).length === 0;
  }
}
