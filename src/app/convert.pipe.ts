import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }
    let miles = parseFloat(value.toString());
    let unit = '';
    if (args[1] == 'unit') {
      switch (args[0]) {
        case 'km':
          unit = ' KM';
          break;
        case 'm':
          unit = ' M';
          break;
        case 'cm':
          unit = ' CM';
          break;
        default:
          unit = '';
      }
    }
    switch (args[0]) {
      case 'km':
        return miles * 1.60934 + unit;
      case 'm':
        return miles * 1.60934 * 1000 + unit;
      case 'cm':
        return miles * 1.60934 * 1000 * 100 + unit;
      default:
        return miles * 1.60934 + unit;
    }
  }
}
