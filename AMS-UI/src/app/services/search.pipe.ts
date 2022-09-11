import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'nameFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = ( (val.NAME.toLocaleLowerCase().includes(args)));
      return rVal;
    })

  }

}