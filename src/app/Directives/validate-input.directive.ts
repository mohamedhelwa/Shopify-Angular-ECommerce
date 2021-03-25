import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidateInput]'
})
export class ValidateInputDirective {
  
  @Input('appValidateInput') CCNumber: string;

  constructor(private ele: ElementRef) { 
    this.CCNumber = "";
  }

  @HostListener('blur') onBlur() {
    this.CCNumber = this.ele.nativeElement.value;

    if(this.ele.nativeElement.value.length == 16) {
      this.ele.nativeElement.style.backgroundColor = "#4CA746";
      this.ele.nativeElement.style.color = "#F8F9FA";

      this.ele.nativeElement.value = this.CCNumber.substring(0, 4) + "-" + 
                                     this.CCNumber.substring(4, 8) + "-" +
                                     this.CCNumber.substring(8, 12) + "-" +
                                     this.CCNumber.substring(12, 16);
    }
    else {
      this.ele.nativeElement.style.backgroundColor = "#DC3545";
      this.ele.nativeElement.style.color = "#F8F9FA";
    }
  }
}
