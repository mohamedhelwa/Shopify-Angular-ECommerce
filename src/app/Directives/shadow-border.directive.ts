import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShadowBorder]'
})
export class ShadowBorderDirective implements OnChanges{
  @Input() bgColor: string;

  ele: ElementRef;

  constructor(ele: ElementRef) {
    this.ele = ele;
    this.bgColor = "white";
  }
  ngOnChanges(): void {
    this.ele.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener('mouseenter') OnMouseEnter(){
    this.ele.nativeElement.style.boxShadow = "0 4px 25px grey";
  }

  @HostListener('mouseout') OnMouseOut(){
    this.ele.nativeElement.style.boxShadow = "0 2px 10px grey";
  }
}
