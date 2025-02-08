import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-typing2',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './typing2.component.html',
  styleUrl: './typing2.component.css',
})
export class Typing2Component {
  MainText: string = '';
  eneteredText: string = '';
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
    this.eneteredText = e.target ? e.target.value : '';
    if (this.eneteredText === this.MainText) {
      this.showWin = true;
    }
  }

  compareLetter(char: string, typed: string) {
    if (!typed) {
      return 'text-gray-600';
    } else if (char === typed) {
      return 'text-green-600';
    } else {
      return 'text-red-600';
    }
  }
}
