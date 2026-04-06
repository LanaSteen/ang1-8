import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Error {


  errorText = signal(null)


  setErrorText(error : any){
    this.errorText.set(error)
     
  }
  
  clearError(){
    this.errorText.set(null)
  }





}
