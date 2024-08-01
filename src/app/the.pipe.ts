import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'the'
})
export class ThePipe implements PipeTransform {

  transform(value: string){
    return "The "+value;
  }

}
