import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from "../models/post.model";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  private readonly apiUrl: string = `${environment.backendUrl}/api/post`;
  getPosts(): Observable<Post[]> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<Post[]>(`${this.apiUrl}`, requestOptions);
  }
  getPostById(postId: number): Observable<Post> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<Post>(`${this.apiUrl}/${postId}`, requestOptions);
  }
  createPost(post: Post): Observable<Post> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Post>(`${this.apiUrl}/create`, post, requestOptions);
  }
  updatePost(post: Post): Observable<Post> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post, requestOptions);
  }
  deletePost(postId: number): Observable<null> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.delete(`${this.apiUrl}/${postId}`, requestOptions);
    return of(null);
  }
  sendImage(post: Post): Observable<void> {
    const accessToken = localStorage.getItem("accessToken")
    const headerDict = {
      'Authorization': "Bearer " + accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<void>(`${this.apiUrl}`, post, requestOptions);
  }

}
