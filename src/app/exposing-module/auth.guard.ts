import {inject} from "@angular/core";
import {CanActivateFn} from "@angular/router";
import {AuthService} from '@@auth-lib';

export const canActivate: CanActivateFn = () => {
  const authService = inject(AuthService);
  if (authService.isLoggedIn()) {
    console.log("authService ready sync");
    return true;
  } else return new Promise((resolve, reject) => {
    if (authService.isLoggedIn()) {
      return resolve(true);
    } else {
      authService.subscribeOnKeycloakReadyOnce(() => {
        console.log("authService ready async");
        resolve(true);
      });
    }
  });
}

