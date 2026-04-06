import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path : "",
    redirectTo : "home",
    pathMatch : "full"
  },
  {
    path : "home",
    loadComponent : () => import('./home/home').then(m => m.Home)
  },
  {
    path : "restaurant",
    loadComponent : () => import('./restaurant/restaurant').then(m => m.Restaurant)
  },
   {
    path : "restaurantapi",
    loadComponent : () => import('./restaurantapi/restaurantapi').then(m => m.Restaurantapi)
  },
  {
    path : "todo",
    loadComponent : () => import('./todo/todo').then(m => m.Todo)
  },
    {
    path : "details",
    loadComponent : () => import('./details/details').then(m => m.Details)
  },
   {
    path : "login",
    loadComponent : () => import('./login/login').then(m => m.Login)
  },
  {
    path : "**",
    loadComponent : () => import('./error/error').then(m => m.Error)
  }
];




// eager routing 
  // {
  //   path : "home",
  //   component : Home
  // },
// lazy loading 


// defer 