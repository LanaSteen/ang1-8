import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error {

  constructor(private route : Router ){}

  ngOnInit(){

  }


  gotohome(){
    //  this.route.navigate(["/home"],{})
    this.route.navigateByUrl("/home")
  }
}

