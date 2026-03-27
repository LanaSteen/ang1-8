import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  imports: [FormsModule],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.scss',
})

// life cycle hook - სიცოცხლის წრე

// angularjs
// angular2+

export class Restaurant {

 ngOnInit(){
    this.filteredProduct = this.products
    this.printItem(this.products[0])
    console.log(this.sum());

    
    
  }

  sum(){
     return 2+4
     
  }

// printId(id :number, name : string){

//   console.log(id, name);
  

// }

search =  "rame"
userName =""

filter2(){
  console.log(this.search);
  this.userName = this.search
}

filter(inp : string){
  console.log(inp);

 this.filteredProduct = this.products.filter(el => el.name?.includes(inp))

  
}

printItem(item : Product){
  console.log(item.id, item.name)
}

  filteredProduct : Product[] = []

  products : Product[] = [
  {
    "id": 1,
    "name": "Laab kai chicken salad",
    "price": 10,
    "nuts": true,
    "image": "https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png",
    "vegeterian": false,
    "spiciness": 2,
    "categoryId": Category.salads
  },
  {
    "id": 2,
    "name": "Som tam papaya salad",
    "price": 9.5,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png",
    "vegeterian": true,
    "spiciness": 0,
    "categoryId": Category.soups
  },
  {
    "id": 3,
    "name": "Tom yam kai",
    "price": 7,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png",
    "vegeterian": false,
    "spiciness": 3,
    "categoryId": Category.chickenDishes
  },
  {
    "id": 4,
    "name": "Tom kha kai",
    "price": 7,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png",
    "vegeterian": false,
    "spiciness": 3,
    "categoryId":Category.chickenDishes
  }
]



}





