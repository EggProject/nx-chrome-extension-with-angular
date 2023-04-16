import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonParse',
  standalone: true,
})
export class JsonParsePipe implements PipeTransform {
  transform(value: string): unknown {
    return JSON.parse(value);
  }
}
