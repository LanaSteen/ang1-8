import { ChangeDetectorRef, Component, effect, signal } from '@angular/core';
import { Api } from '../services/api';
import { Product2 } from '../models/product';
import { Error } from '../services/error';
import { ErrorDialog } from "../error-dialog/error-dialog";

@Component({
  selector: 'app-restaurantapi',
  imports: [ErrorDialog],
  templateUrl: './restaurantapi.html',
  styleUrl: './restaurantapi.scss',
})
export class Restaurantapi {
   constructor(private api : Api, private cdr : ChangeDetectorRef, private errorServ : Error  ){
       effect(() => {
        this.err.set(this.errorServ.errorText())
      })
   }


   err = signal(null)

   ngOnInit(){

    this.api.getAll2("product")
    .subscribe({
      next : (resp:any) =>{
          console.log(resp.data.products);
          this.productArr3 = resp.data.products
          this.cdr.detectChanges()
          
      },
      error : (err:any) =>{
        console.log(err);
        
      }
    })

    this.api.getAll("Products/GetAll").subscribe(resp => {
      console.log(resp);
      
    })
    this.api.getAll("Categories/GetAll").subscribe(resp => {
        console.log(resp);
    })

    //  this.api.getAll("Products/GetAll").subscribe({
    //   next : (resp: any) => {
    //   console.log(resp)
    //   this.productArr = resp
    //  },
    //  error : (err: any) => {
    //   console.log(err)
    //  }
    //  })
   }


   productArr3 : any[] = []

   productArr : Product2[] = [] 

}
