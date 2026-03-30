import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from './home/home';
import { Restaurant } from './restaurant/restaurant';
import { Todo } from './todo/todo';



@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Footer, Header, Home, Restaurant, Todo ]
})
export class App {
 



  
}












