import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Error } from '../services/error';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  const errorServ = inject(Error)

  if(req.url.includes('restaurantapi')){
     const cloneReq = req.clone({
     setHeaders : {
      'X-API-KEY' : "14c34c99-91b6-41a8-ad96-f4d3dc43e35b"
     }
  })
    return next(cloneReq).pipe(
      catchError(err =>{
            errorServ.setErrorText(err)
            return throwError (() => err)
      })
    )
  }

  else{
    return next(req)
  }
 
  // return next(req);
};
