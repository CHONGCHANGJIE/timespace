import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(parts: any, term: any): any {
    //check if search term is undefined
    if(term===undefined) return parts;
    //return updated parts array

    return parts.filter(function(part){
     return part.name.toLowerCase().includes(term.toLowerCase());
    })

  }

}
