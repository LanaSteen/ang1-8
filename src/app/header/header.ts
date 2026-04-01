import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

 useNAme = "header John "

 active = "active"


}



// FormsModule   [(ngModel)]
// CommonModule  [ngClass]  [ngStyle]
// RouterModule   routing ის routerLink 