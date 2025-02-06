import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.css',
})
export class TypingComponent {
  MainText: string = this.makeRandomText(30);
  CorrectedText: string = this.MainText;

  doCorrection(e: any) {
    let correctionText = '';
    let eneteredText = e.target.value;
    let status = 0;
    let textColor = '';
    for (let i = 0; i < this.MainText.length; i++) {
      if (i < eneteredText.lenght) {
        if (this.MainText[i] == eneteredText[i]) {
          textColor = 'text-green-800';
        } else {
          textColor = 'text-green-800';
        }
      } else {
        textColor = 'text-gray-600';
      }
      correctionText +=
        "<span class='"+textColor+"'>" + this.MainText[i] + '</span>';
    }
    this.CorrectedText = correctionText;
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
