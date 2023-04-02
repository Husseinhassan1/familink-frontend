import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private users: User[] = [{ // add fake user with email "test@example.com" and username "testuser"
    id: 1,
    email: 'test@example.com',
    fullName: 'Test User',
    username: 'testuser',
    password: 'password'
  }];

  constructor(private http: HttpClient) { }

  createUser(email: string, fullName: string, username: string, password: string): Observable<User> {
    // Check if email is already taken
    const emailTaken = this.users.some(u => u.email === email);
    if (emailTaken) {
      return throwError('Email is already taken');
    }

    // Check if username is already taken
    const usernameTaken = this.users.some(u => u.username === username);
    if (usernameTaken) {
      return throwError('Username taken');
    }

    // Create a new user and return it
    const newUser: User = {
      id: this.users.length + 1,
      email,
      fullName,
      username,
      password
    };
    this.users.push(newUser);
    return of(newUser);
  }
}
