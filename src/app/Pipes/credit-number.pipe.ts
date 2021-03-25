import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditNumber'
})
export class CreditNumberPipe implements PipeTransform {

  transform(CartNumber: string): string {
    if(CartNumber.length == 16) {
      CartNumber = CartNumber.substring(0, 4) + "-" + 
                   CartNumber.substring(4, 8) + "-" +
                   CartNumber.substring(8, 12) + "-" +
                   CartNumber.substring(12, 16);
    }
    return CartNumber;
  }
}
