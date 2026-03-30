


export class Product {
    id! : number;
    name? : string;
    price? : number;
    nuts? : boolean;
    image? : string;
    vegeterian? : boolean;
    spiciness? : number;
    categoryId? : Category;
    
}
// 25

export class CategoryBtn {
    id!: number;
    name!:string
}



export enum Category {
  salads = "Salads with vegitables",
  soups = 2,
  chickenDishes = 3,
  beefDishes = 4,
}


