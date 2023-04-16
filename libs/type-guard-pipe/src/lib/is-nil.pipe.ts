import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from '@app-grpc-networks-chrome-extension/type-guard';

@Pipe({
  name: 'isNil',
  standalone: true,
})
export class IsNilPipe implements PipeTransform {
  transform(value: unknown): boolean {
    return isNil(value);
  }
}
