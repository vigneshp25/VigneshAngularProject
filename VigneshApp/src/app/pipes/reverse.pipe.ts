import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe6',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let inputWord = value;
    let inputWordLength = inputWord.length;
    let reverseWord = "";
    for (let i = inputWordLength-1; i>=0; i--){
      reverseWord += inputWord[i];
    }
    return reverseWord;
  }

}
