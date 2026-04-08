import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  

  if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
     return true;
  }



  console.log(route.url);
  console.log(state.url);
  
  localStorage.setItem("triedRoute", state.url)

  alert("please login first")

  setTimeout(() => {
    router.navigateByUrl("/login")
  }, 400);

  
  return false;
};
