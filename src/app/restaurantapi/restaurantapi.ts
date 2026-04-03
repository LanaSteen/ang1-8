import { Component } from '@angular/core';
import { Api } from '../services/api';
import { Product2 } from '../models/product';

@Component({
  selector: 'app-restaurantapi',
  imports: [],
  templateUrl: './restaurantapi.html',
  styleUrl: './restaurantapi.scss',
})
export class Restaurantapi {
   constructor(private api : Api){}


   ngOnInit(){

    this.api.getAll("Products/GetAll").subscribe(resp => {
      console.log(resp);
      
    })
    this.api.getAll("Categories/GetAll").subscribe(resp => {
        console.log(resp);
    })

     this.api.getAll("Products/GetAll").subscribe({
      next : (resp: any) => {
      console.log(resp)
      this.productArr = resp
     },
     error : (err: any) => {
      console.log(err)
     }
     })
   }



   productArr : Product2[] = [] 

}
