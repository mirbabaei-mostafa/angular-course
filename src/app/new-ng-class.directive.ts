import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNewNgClass]',
  standalone: true,
})
export class NewNgClassDirective {
  constructor(private element: ElementRef) {}

  @Input('appNewNgClass') set newNgClass(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
