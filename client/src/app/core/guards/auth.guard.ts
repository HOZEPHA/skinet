import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | any> {
    return this.accountService.currentUser$.pipe(
      map((auth): true | any => {
        if (auth) {
          return true;
        }
        this.router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
      })
    );
  }
  
}

