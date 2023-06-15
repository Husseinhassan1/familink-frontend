import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {UserProfileService} from "../services/userprofile.service";

@Injectable({
  providedIn: 'root',
})
export class UserProfileResolver implements Resolve<any> {
  constructor(private userProfileService: UserProfileService) {
  }

  resolve(): Observable<any> {
    return new Observable((observer) => {
      const userProfileData = this.userProfileService.getUserProfile();
      observer.next(userProfileData);
      observer.complete();
    });
  }
}
