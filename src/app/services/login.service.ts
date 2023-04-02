import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private fakeUser: User = {
    id: 1,
    email: 'test@example.com',
    fullName: 'test',
    username: 'test',
    password: '12345678'
  }

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<User | string> {
    if (email === this.fakeUser.email && password === this.fakeUser.password) {
      return of(this.fakeUser);
    } else {
      return of('Incorrect email or password');
    }
  }

}
