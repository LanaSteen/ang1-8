import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../services/auth';
import { Button } from "../components/button/button";

@Component({
  selector: 'app-header',
  imports: [RouterModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private auth : Auth, private router : Router){
    effect(() => {
     this.auth.isLogedIn() ? this.logText = "Log Out" : this.logText = "Log In"
     this.isAuth.set(this.auth.isLogedIn())
        
    })
  }


  isAuth = signal(false)

  goToLoginOrLogOut(){
     if(this.logText == "Log Out"){
          this.auth.logout()
             this.router.navigateByUrl("/login")
     }
     else{
        this.router.navigateByUrl("/login")
     }
  }

  useNAme = 'header John ';

  active = 'active';

  logText = "Log In"
}

// FormsModule   [(ngModel)]
// CommonModule  [ngClass]  [ngStyle]
// RouterModule   routing ის routerLink
