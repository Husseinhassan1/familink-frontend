import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class SignupService {
  private readonly apiUrl: string = `${environment.backendUrl}/api/auth/register`;

  constructor(private http: HttpClient) { }

  createUser(email: string, firstname: string, lastname: string, nickname: string, password: string): Observable<User> {
    // Send a POST request to the backend API with the user data

    return this.http.post<User>(this.apiUrl, { email, firstname, lastname, nickname, password })
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
