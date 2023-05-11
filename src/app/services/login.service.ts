import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<User | string> {
    const body = { email, password };
    const url = `${environment.backendUrl}/api/auth/authenticate`;
    return this.http.post<User>(url, body);

    // return this.http.post<User>('http://localhost:8080/auth/authenticate', body);
  }

}
