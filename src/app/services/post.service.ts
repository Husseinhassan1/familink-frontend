import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from "../models/post.model";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  private readonly apiUrl: string = `${environment.backendUrl}/api/post`;
  getPosts() {
    return this.http.get('/api/posts');
  }
  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${postId}`);
  }
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/create`, post);
  }
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
  }
  deletePost(postId: number): Observable<null> {
    this.http.delete(`${this.apiUrl}/${postId}`);
    return of(null);
  }
  sendImage(post: Post): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, post);
  }

}
