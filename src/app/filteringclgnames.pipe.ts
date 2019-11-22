import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteringclgnames'
})
export class FilteringclgnamesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter(college => college.name.includes('KIET'));
  }

}
