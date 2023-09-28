import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string {
    let str = value.toString();
    str = str.replace(".", ",");
    return `R$ ${str}`;
  }

}
