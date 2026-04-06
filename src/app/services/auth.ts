import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {




isLogedIn = signal(false)


login(){
   this.isLogedIn.set(true)
}

logout(){
  this.isLogedIn.set(false)
}

}
