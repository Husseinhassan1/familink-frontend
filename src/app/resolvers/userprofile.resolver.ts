import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileResolver implements Resolve<boolean> {

//constructor(private Userprofileservice: UserProfileService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

  //const id = route.paramMap.get('userprofileid')
   //this.userprofileservice.getUser(5);

    return of(true);
  }
}
