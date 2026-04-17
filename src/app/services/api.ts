import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

 constructor(private http : HttpClient){}


 baseUrl = "https://restaurant.stepprojects.ge/api/"
 baseUrl2= "https://restaurantapi.stepacademy.ge/api/"
  //auth/login



postObj(url:string, data : any){
   return this.http.post(this.baseUrl2+url, data )
}

// {withCredentials : true}

 getAll2(url : string){
  return  this.http.get(this.baseUrl2 + url)
 }


 getAll(url : string){
  return  this.http.get(this.baseUrl+url)
 }

//  postobj(url: string, obj:any){
//   return  this.http.post(this.baseUrl+url, obj)
//  }


}
