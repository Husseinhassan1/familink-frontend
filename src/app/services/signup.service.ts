import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/auth/register';

  constructor(private http: HttpClient) { }

  createUser(email: string, firstname: string, lastname: string, username: string, password: string): Observable<User> {
    // Send a POST request to the backend API with the user data

    return this.http.post<User>(this.apiUrl, { email, firstname, lastname, username, password })
      .pipe(
        catchError((error) => {
          if (error.status === 403) {
            return throwError('Email or username already exists.');
          } else {
            return throwError('Error occurred while registering. Please try again later.');
          }
        })
      );
  }
}
