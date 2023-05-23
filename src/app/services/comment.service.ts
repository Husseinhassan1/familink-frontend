import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }

 // addComment(contenrt: String): Observable<Comment> {
   // return this.http.post<Comment>(this.apiUrl, );}

  deleteComment(id: number): Observable<Comment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Comment>(url);
  }
}
