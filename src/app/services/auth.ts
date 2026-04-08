import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private router : Router){
    console.log(localStorage.getItem("triedRoute"));
    
    localStorage.getItem("triedRoute") ? this.path = localStorage.getItem("triedRoute")! : this.path = "/home"
  }


  path = "/home"




isLogedIn = signal(false)


login(){
   this.isLogedIn.set(true)
   localStorage.setItem("token", "123")
   this.router.navigateByUrl(this.path)
   localStorage.removeItem("triedRoute")
}

logout(){
  this.isLogedIn.set(false)
  localStorage.removeItem("token")
}

}
