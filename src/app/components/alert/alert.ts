import { Component, effect } from '@angular/core';
import { AlertServ } from '../../services/alert-serv';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  constructor(private alser : AlertServ ){

    effect(()=>{
       this.message = this.alser.context()
       this.type = this.alser.type()
       debugger
    })

  }


  type = ""
  message = "test"

  close(){
    this.alser.hide()
}


}
