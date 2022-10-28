import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserSummaryViewModel } from './account/account.models';
import { AccountService } from './account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      localStorage.setItem('loginReturnUrl', state.url);

    // TODO: inject your accountService in the constructor, you'll create it in the next section
    return this.accountService.user.pipe(
      map((user: UserSummaryViewModel) => {
        if (user.name === 'Anonymous') {
          return this.router.createUrlTree(['./account/login']);
        }
        // add some role checks, if your app has roles...
        //if (!user || !user.roles || user.roles.length === 0) {
        //  this.router.navigate(['not-authorized']);
        //  return false;
        //}
        // TODO: may want to add more extensive role checks per route here
        return true; // true, didn't find a reason to prevent access to the route...
      })
    );
    }

}
