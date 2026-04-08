import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  
  @Input() btnText = ""
  @Input() cliCount = 0

  @Output() infoFromChild = new EventEmitter<any>()


  sentInfoToParent(){
      this.infoFromChild.emit(this.isLogin)
  }


  // btnText = input<string>("")  

  isLogin = true

  ngOnChanges(){
     console.log(
      "info from on changes"
     );
  }

  ngOnInit(){
    console.log(
      "info from on init"
     );
  }

}


// მშობლიდან შვილში ინფორმაციის გადაცემა ინფუთი

// შვილიდან მშობელში ინფორმაციის გაგზავნა