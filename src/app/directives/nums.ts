import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNums]',
})
export class Nums {
  constructor(private el: ElementRef) {}
  
  @HostListener('keypress', ['$event'])
  onKeyPress(event : any){

     if(!/[0-9]/.test(event.key)){
        // event.preventDefault()
        this.el.nativeElement.style.border = "2px solid red"
        this.el.nativeElement.style.outline = "2px solid red"
     }
     else{
        this.el.nativeElement.style.border = "2px solid black"
        this.el.nativeElement.style.outline = "2px solid black"
     }

  }

}
