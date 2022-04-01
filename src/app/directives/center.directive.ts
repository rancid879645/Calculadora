import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCenter]'
})
export class CenterDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.textAlign = "Center";
  }

}
