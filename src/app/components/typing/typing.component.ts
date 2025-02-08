import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.css',
})
export class TypingComponent {
  MainText: string = '';
  CorrectedText: any;
  showWin: boolean = false;

  constructor() {
    this.MainText = this.makeRandomText(30);
    this.doCorrection('');
  }

  makeRandomText(lenght: number) {
    let returnString = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    for (let i = 0; i < lenght; i++) {
      returnString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return returnString;
  }

  doCorrection(e: any) {
    this.CorrectedText = [];
    let eneteredText = e.target ? e.target.value : '';
    let counter = 0;
    for (let i = 0; i < this.MainText.length; i++) {
      let textColor = '';
      if (i < eneteredText.length) {
        if (this.MainText[i] == eneteredText[i]) {
          textColor = 'text-green-600';
          counter += 1;
        } else {
          textColor = 'text-red-600';
        }
      } else {
        textColor = 'text-gray-600';
      }
      this.CorrectedText.push({ char: this.MainText[i], color: textColor });
    }
    if (counter == this.MainText.length) {
      this.showWin = true;
    } else {
      this.showWin = false;
    }
  }
}
