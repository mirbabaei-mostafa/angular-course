import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [NgIf],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.css',
})
export class PassgenComponent {
  passLenght: number = 0;
  generatedPass: string = '';
  isLetters: boolean = false;
  isNumbers: boolean = false;
  isSymboles: boolean = false;

  handleChange(e: any) {
    const parseInput = parseInt(e.target.value);
    if (!isNaN(parseInput)) {
      this.passLenght = parseInput;
    }
    console.log(this.passLenght);
  }

  handleLetterCheck() {
    this.isLetters = !this.isLetters;
  }

  handleNumberCheck() {
    this.isNumbers = !this.isNumbers;
  }

  handleSymboleCheck() {
    this.isSymboles = !this.isSymboles;
  }

  onGenerateClick() {
    if (!this.passLenght) {
      return;
    }
    if(!this.isSymboles && !this.isNumbers) {
      this.isLetters = true
    }
    this.generatedPass = '';
    const numbers = '0123456789';
    const symboles = '!@#$%^&*()';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    var passString: string = '';
    if (this.isLetters) {
      passString += letters;
    }
    if (this.isNumbers) {
      passString += numbers;
    }
    if (this.isSymboles) {
      passString += symboles;
    }
    for (let i = 0; i < this.passLenght; i++) {
      const index = Math.floor(Math.random() * passString.length);
      this.generatedPass += passString[index];
    }
  }
}
