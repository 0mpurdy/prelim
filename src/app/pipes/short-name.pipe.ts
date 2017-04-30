import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;

    // if (!value) { return undefined; }
    // return value.forename + ' ' + value.surname;
  }

}
