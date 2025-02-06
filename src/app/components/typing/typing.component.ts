import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.css',
})
export class TypingComponent {
  MainText = this.makeRandomText(30);

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
