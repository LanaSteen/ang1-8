import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AlertServ } from '../services/alert-serv';

export const authGuard: CanActivateFn = (route, state) => {


  const alert = inject(AlertServ)
  const router = inject(Router)
  

  if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
     return true;
  }



  console.log(route.url);
  console.log(state.url);
  
  localStorage.setItem("triedRoute", state.url)

  // alert("please login first")

   alert.show("please login first", "error")

  setTimeout(() => {
    router.navigateByUrl("/login")
  }, 400);

  
  return false;
};
