import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Helper {



  userName = "John"

  print(){
     console.log("print from service");
     
  }



}
