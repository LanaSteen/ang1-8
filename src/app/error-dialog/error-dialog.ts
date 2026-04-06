import { Component } from '@angular/core';
import { Error } from '../services/error';

@Component({
  selector: 'app-error-dialog',
  imports: [],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.scss',
})
export class ErrorDialog {
  constructor(private errooorserv : Error){

  }
  errorText : any



  closeDialog(){
    this.errooorserv.clearError()
    
  }
}
