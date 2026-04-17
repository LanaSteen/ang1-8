import { Component } from '@angular/core';
import { LoginUser } from '../models/user';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-api',
  imports: [FormsModule],
  templateUrl: './login-api.html',
  styleUrl: './login-api.scss',
})
export class LoginApi {

  constructor(private api :Api, private cookiesevice : CookieService){}

  loginUser : LoginUser = {
    email : "stepacc210@gmail.com",
    password : "Stepacc210@gmail.com"
  }  //new LoginUser()


  login(myForm : any){
    console.log(myForm);
      console.log(myForm.value)
      this.api.postObj("auth/login", myForm.value).subscribe({
        next : (resp :any)=>{
            console.log(resp);
            localStorage.setItem("accessToken", resp.data.accessToken)
            localStorage.setItem("refreshToken", resp.data.refreshToken)
            this.cookiesevice.set("accessToken", resp.data.accessToken, {
              expires : 2,
              path : "/",
              secure : true  ///  https   
            })


            // this.cookiesevice.deleteAll()

        },
        error : er => alert(er)
      })
  
  }

}
