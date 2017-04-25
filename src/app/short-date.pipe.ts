import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    return date.getUTCHours() + ':' + date.getUTCMinutes();
  }

}
