import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe3',
  standalone: true
})
export class ConjunctionwordspipePipe implements PipeTransform {
  conjuctionWords = ['And','But','Or','Nor','For','So','Yet'];
  transform(value: string): string {
    return "";
  }

}
