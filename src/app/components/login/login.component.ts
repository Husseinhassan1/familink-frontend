import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router:Router, private loginService: LoginService) {
  }

  login() {
    this.loginService.getUser(this.email, this.password)
      .subscribe(
        (result: User | string) => {
          if (typeof result === 'string') {
            this.errorMessage = result;
          } else {
            this.router.navigate(['home']);
          }
        },
        (error: any) => {
          this.errorMessage = error.message;
        }
      );
  }


  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }

}
