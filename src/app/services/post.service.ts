import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from "../models/post.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get('/api/posts');
  }
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }
  createPost(post: any) {
    return this.http.post('/api/posts', post);
  }
  updatePost(post: any) {
    return this.http.put(`/api/posts/${post.id}`, post);
  }
  deletePost(id: string) {
    return this.http.delete(`/api/posts/${id}`);
  }

}
