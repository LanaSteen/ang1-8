import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-for-signal',
  imports: [],
  templateUrl: './for-signal.html',
  styleUrl: './for-signal.scss',
})
export class ForSignal {

  num1 = signal(0)

  converted = computed(()=> this.num1()*2.7 )

  add(){
    this.num1.update(val => val+1)
   
  }

  redce(){
    this.num1.set(50)
    this.num1.update(val => val-1)
  }
  resetNumber(){

     this.num1.set(0)
  }
  

}
