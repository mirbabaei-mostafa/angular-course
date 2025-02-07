import { Component } from '@angular/core';
import { faker } from 'faker';

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

  constructor() {
    this.MainText = this.makeRandomText(30);
    this.MainText = faker.lo;
    this.doCorrection('');
  }

  doCorrection(e: any) {
    this.CorrectedText = [];
    let eneteredText = e.target ? e.target.value : '';
    for (let i = 0; i < this.MainText.length; i++) {
      let textColor = '';
      if (i < eneteredText.length) {
        if (this.MainText[i] == eneteredText[i]) {
          textColor = 'text-green-600';
        } else {
          textColor = 'text-red-600';
        }
      } else {
        textColor = 'text-gray-600';
      }
      this.CorrectedText.push({ char: this.MainText[i], color: textColor });
    }
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
}
