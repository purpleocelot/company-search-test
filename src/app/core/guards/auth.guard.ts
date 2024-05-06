import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  boolean | UrlTree => {

  const isLoggedIn = inject(UserService).isLoggedIn;
  return isLoggedIn ? true : inject(Router).createUrlTree(['/login']);
};
