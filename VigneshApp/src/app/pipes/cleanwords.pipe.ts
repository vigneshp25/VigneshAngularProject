import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe4',
  standalone: true
})
export class CleanwordsPipe implements PipeTransform {
  unCleanWords = ["dog", "pig", "donkey", "monkey","puppy"]
  transform(value: string): string {
    let inputText = value;
    let arrayOfGivenWords = inputText.split(" ");
    let givenWordsCount = arrayOfGivenWords.length;
    let newlyFormedWords = "";
    let consealedLetters = (num:number): string =>  {
      let text = ""
        for(let i=0; i<num; i++){
          text += '*';
        }
        return text;
    }
    let concealLetters = (inputWord:string):string => {
      let inputWordIs = inputWord;
      let inputWordLength = inputWordIs.length;
      let firstLetter = inputWordIs[0];
      let lastLetter = inputWordIs[inputWordLength-1];
      let star = consealedLetters(inputWordLength-2);
      return firstLetter + star + lastLetter;
    }
    for (let i = 0; i < givenWordsCount; i++) {
      let setFlag = true;
      for (let j = 0; j < this.unCleanWords.length; j++) {
        if (arrayOfGivenWords[i]===(this.unCleanWords[j])) {
          setFlag = false;
          break;
        } 
      }
      if (!setFlag){
        newlyFormedWords += " " + concealLetters(arrayOfGivenWords[i]);
      } else{
        newlyFormedWords += " " + arrayOfGivenWords[i];
      }
    }
    return newlyFormedWords;
  }
 

}
