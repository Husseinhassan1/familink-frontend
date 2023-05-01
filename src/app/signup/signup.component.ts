import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SignupService} from "../services/signup.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
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

    this.signupService.createUser(this.email, this.firstName, this.lastName, this.username, this.password)
      .subscribe(
        (user: User) => {

          this.router.navigate(['login']);
        },
        (error: string) => {
          this.errorMessage = error;
        }
      );
  }


}
