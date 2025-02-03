import { Component } from '@angular/core';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.css',
})
export class PassgenComponent {
  passLenght: number = 1;
  generatedPass: string = 'Pass';
  isLetters: boolean = false;
  isNumbers: boolean = false;
  isSymboles: boolean = false;

  handleChange(e: string) {
    const parseInput = parseInt(e.value);
    if (!isNaN(parseInput)) {
      this.passLenght = parseInput;
    }
    console.log(this.passLenght)
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
    console.log('Generate');
  }
}
