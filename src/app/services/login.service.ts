import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { User } from '../models/user.model';
import {environment} from "../../environments/environment";


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    const payload = { email: email, password: password };
    return this.http.post<User>(`${environment.backendUrl}/api/auth/authenticate`, payload);
  }

  // private refreshTokenUrl = `${environment.backendUrl}/api/auth/refresh-token`;
  // private token?: string;
  //
  // constructor(private http: HttpClient) { }
  //
  // login(email: string, password: string): Observable<User | string> {
  //   const body = { email, password };
  //   const url = `${environment.backendUrl}/api/auth/authenticate`;
  //
  //   return this.http.post<User>(url, body).pipe(
  //     tap((response: User | string) => {
  //       if (typeof response !== 'string' && response.token) {
  //         this.saveToken(response.token);
  //       }
  //     })
  //   );
  // }
  //
  // saveToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }
  //
  // getToken(): string {
  //   return localStorage.getItem('token') || '';
  // }
  //
  // refreshAccessToken(): Observable<{ token: string }> {
  //   return this.http.get<{ token: string }>(this.refreshTokenUrl).pipe(
  //     tap(
  //       (response: { token: string }) => {
  //         this.saveToken(response.token);
  //       },
  //       (error: any) => {
  //         // Handle token refresh error if needed
  //       }
  //     )
  //   );
  // }

}
