import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe1',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform(value: string): string {
    let numericalValue = parseInt(value);

    if (numericalValue % 10 == 1 && Math.round(numericalValue / 10) == 1) {

      return numericalValue + 'th';
    } else if (numericalValue % 10 == 1) {
      return numericalValue + 'st';

    } else if (numericalValue % 10 == 2 && Math.round(numericalValue / 10) == 1) {

      return numericalValue + 'th';
    } else if (numericalValue % 10 == 2) {
      return numericalValue + 'nd';

    } else if (numericalValue % 10 == 3 && Math.round(numericalValue / 10) == 1) {

      return numericalValue + 'th';
    } else if (numericalValue % 10 == 3) {
      return numericalValue + 'rd';

    } else {
      return numericalValue + 'th';
    }
  }
}
