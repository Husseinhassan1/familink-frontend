import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'your_api_endpoint'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/photos`);
  }

  getFollowersCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/followers/count`);
  }

  getFollowingCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/following/count`);
  }

  getPostsCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/posts/count`);
  }

  getUserName(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/user/name`);
  }

  getUserDescription(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/user/description`);
  }

}
