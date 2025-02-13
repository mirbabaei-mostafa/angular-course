import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  standalone: true
})
export class MyClassDirective {

  constructor() { }

}
