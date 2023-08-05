import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, createUrlTreeFromSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { AuthService } from "../auth/auth.service";

export const loggedIn: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  if(!inject(AuthService).isLoggedIn()){
    router.navigate(['login'])
  }
  return inject(AuthService).isLoggedIn();
};

export const loggedOut: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  if(inject(AuthService).isLoggedIn()){
    router.navigate([''])
  }
  return !inject(AuthService).isLoggedIn();
};

export const isAdmin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  if(!inject(AuthService).isAdmin()){
    router.navigate(['user'])
  }
  return inject(AuthService).isAdmin();
};


export const isUser: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  if(!inject(AuthService).isUser()){
    router.navigate(['admin'])
  }
  return inject(AuthService).isUser();
};
