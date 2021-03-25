import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyID'
})
export class EgyIDPipe implements PipeTransform {

  private returnedDate: string;

  constructor() {
    this.returnedDate = "";
  }

  transform(IDNumber: string, date: string): string {
    this.returnedDate = IDNumber.substring(1, 7);
    date = date.toLowerCase();
    if(IDNumber.length == 14) {
      if(date == "yy") {
        this.returnedDate = "19" + this.returnedDate.substring(0,2);
      }
      else if(date == "mm") {
        this.returnedDate = this.returnedDate.substring(2, 4);
      }
      else if(date == "dd") {
        this.returnedDate = this.returnedDate.substring(4, 6);
      }
      else if(date == "fulldate") {
        this.returnedDate = this.returnedDate.substring(4, 6) + "-" +
                            this.returnedDate.substring(2, 4) + "-" +
                            "19" +
                            this.returnedDate.substring(0, 2);
      }
    }
    return this.returnedDate;
  }

}
