import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginResolver implements Resolve<boolean> {

  constructor(private loginService: LoginService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const email = route.queryParamMap.get('email') ?? '';
    const password = route.queryParamMap.get('password') ?? '';

    return this.loginService.getUser(email, password).pipe(
      map(user => {
        // If getUser returns a user, user is authenticated
        return true;
      }),
      catchError(error => {
        // If getUser throws an error, user is not authenticated
        return of(false);
      })
    );
  }
}
