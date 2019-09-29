import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], filter: string): any {
    if (!value || !filter) {
      return value;
    } else {
      return value.filter(items => items.title.indexOf(filter) > -1);
    }
  }

}
