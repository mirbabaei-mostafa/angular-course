import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  standalone: true,
})
export class MyClassDirective {
  constructor(private element: ElementRef) {}

  // Type 1
  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  // Type 2
  // @Input() set appMyClass(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  // Type 3 : Input alias
  @Input("appMyClass") set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
