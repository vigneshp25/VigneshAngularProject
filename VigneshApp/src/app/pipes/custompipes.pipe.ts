import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes',
  standalone: true
})
export class CustompipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
