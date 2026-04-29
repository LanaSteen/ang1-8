import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appScarry]',
})
export class Scarry {
  constructor(private el : ElementRef) {}



  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.style.backgroundImage= ""
  }


  @HostListener('mouseenter')
  onMouseEnter(){
    this.el.nativeElement.style.backgroundImage= "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROq6FSVm_nlYKK1LZn55274Y8I2oSEISqx3Q&s)"
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event : any){

     if(!/[0-9]/.test(event.key)){
        event.preventDefault()
        this.el.nativeElement.style.border = "2px solid red"
     }

  }


}
