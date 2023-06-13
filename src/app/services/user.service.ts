import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {
  private baseUrl = `${environment.backendUrl}/api/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<User[]>(`${this.baseUrl}/list`, requestOptions);
  }

  getUser(userId: number): Observable<User> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<User>(`${this.baseUrl}/${userId}`, requestOptions);
  }

  createUser(user: User): Observable<User> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<User>(this.baseUrl, user, requestOptions);
  }

  updateUser(user: User): Observable<User> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user, requestOptions);
  }

  deleteUser(userId: number): Observable<null> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.delete(`${this.baseUrl}/${userId}`, requestOptions);
    return of(null);
  }
}
