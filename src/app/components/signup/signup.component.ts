import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  fullName: string = '';
  username: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router:Router, private signupService: SignupService) {
  }
  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.signupService.createUser(this.email, this.fullName, this.username, this.password)
      .subscribe(
        (user: User) => {
          //tested with empty route and it took me back to login which means it works, only needs home
          //to be created
          this.router.navigate(['home']);
        },
        (error: string) => {
          this.errorMessage = error;
        }
      );
  }


}
