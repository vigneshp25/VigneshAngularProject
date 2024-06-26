import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe3',
  standalone: true
})
export class ConjunctionwordspipePipe implements PipeTransform {
  conjuctionWords = ['and','but','or','nor','for','so','yet'];
  transform(value: string): string {
    let inputText = value;
    let arrayOfGivenWords = inputText.split(" ");
    let givenWordsCount = arrayOfGivenWords.length;
    let newlyFormedWords = "";
    let capitalize = (inputWord:string):string =>{
      let inputText = inputWord;
      let totalLength = inputText.length;
      let firstLetterOfInputText = inputText.slice(0,1);
      let restOfTheLetters = inputText.slice(1,totalLength);
      let capitalFirstLetter = firstLetterOfInputText.toUpperCase();
      let smallRestOfLetters = restOfTheLetters.toLowerCase();
      return capitalFirstLetter + smallRestOfLetters
    }
    for (let i = 0; i < givenWordsCount; i++) {
      let setFlag = true;
      for (let j = 0; j < this.conjuctionWords.length; j++) {
        if (arrayOfGivenWords[i]===(this.conjuctionWords[j])) {
          setFlag = false;
          break;
        } 
      }
      if (!setFlag){
        newlyFormedWords += " " + arrayOfGivenWords[i];
        console.log(newlyFormedWords);
      } else{
        newlyFormedWords += " " + capitalize(arrayOfGivenWords[i]);
        console.log(newlyFormedWords);
      }
    }
    return newlyFormedWords;
  }
  
}
