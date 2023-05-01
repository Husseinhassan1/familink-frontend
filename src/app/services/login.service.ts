import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<User | string> {
    const body = { email, password };
    return this.http.post<User>('http://localhost:8080/auth/authenticate', body);
  }

}
