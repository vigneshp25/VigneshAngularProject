import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe2',
  standalone: true
})
export class TitleonlypipePipe implements PipeTransform {

  transform(value: string): string {
    let inputText = value;
    let totalLength = inputText.length;
    let firstLetterOfInputText = inputText.slice(0,1);
    let restOfTheLetters = inputText.slice(1,totalLength);
    let capitalFirstLetter = firstLetterOfInputText.toUpperCase();
    let smallRestOfLetters = restOfTheLetters.toLowerCase();
    return capitalFirstLetter + smallRestOfLetters
  }

}
