import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, name: string): unknown {
    if(name === ''){
      return value;
    }
    return value.filter((employee:any) => {
      return  employee.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
   });
  }

}
