import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe5',
  standalone: true
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string): string {
    let inputValue = value;
    let arrayOfGivenWords = inputValue.split(" ");
    let givenWordsCount = arrayOfGivenWords.length;
    let newlyFormedWords = arrayOfGivenWords[0];
    let capitalize = (inputWord:string):string => {
      let inputText = inputWord;
      let totalLength = inputText.length;
      let firstLetterOfInputText = inputText.slice(0,1);
      let restOfTheLetters = inputText.slice(1,totalLength);
      let capitalFirstLetter = firstLetterOfInputText.toUpperCase();
      let smallRestOfLetters = restOfTheLetters.toLowerCase();
      return capitalFirstLetter + smallRestOfLetters
    }
    for(let i=1; i<givenWordsCount ; i++){
      newlyFormedWords += capitalize(arrayOfGivenWords[i]);
    }
    return newlyFormedWords;
  }

}
