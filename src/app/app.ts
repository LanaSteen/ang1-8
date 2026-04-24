import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from './home/home';
import { Restaurant } from './restaurant/restaurant';
import { Todo } from './todo/todo';
import { RouterOutlet } from '@angular/router';
import { ForSignal } from './for-signal/for-signal';
import { Alert } from './components/alert/alert';
import { AlertServ } from './services/alert-serv';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, Footer, Header, Home, Restaurant, Todo, ForSignal, Alert],
})
export class App {


  constructor(public alert : AlertServ){

  }
   
}
