import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Helper } from '../services/helper';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  constructor(
    private route  : ActivatedRoute, 
    private helpeer : Helper
  )
    {
   this.username = this.helpeer.userName
   route.queryParams.subscribe((data: any) => {
        console.log(data.id);
        console.log(data.name);
        this.productId = data.id
        this.name = data.name
    });

    route.queryParams
    .pipe(takeUntilDestroyed())
    .subscribe(data => {
        console.log(data['id']);
        console.log(data['name']);
        this.productId = data['id']
        this.name = data['name']
    });
    
  }


  

  username!: string
  productId!:number
  name!:string



  ngOnInit(){
     this.helpeer.print()
  }


  ngOnDestroy(){
    localStorage.removeItem("")
  }


  
}

// data.id 
// data['id']




// observable subscribe

// promise   then 