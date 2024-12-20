import {inject} from "@angular/core";
import {CanActivateFn} from "@angular/router";
import {AuthService} from '@@auth-lib';

export const canActivate: CanActivateFn = () => {
  const authService = inject(AuthService);
  if (authService.isLoggedIn()) {
    console.debug("authService ready sync");
    return true;
  } else return new Promise((resolve, reject) => {
    authService.onLoggedIn().subscribe(() => {
      console.debug("authService ready async");
      resolve(true);
    });
  });
}

