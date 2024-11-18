import {inject} from "@angular/core";
import {CanActivateFn} from "@angular/router";
import {AuthService} from '@@auth-lib';

export const canActivate: CanActivateFn = () => {
  return new Promise((resolve, reject) => {
    (inject(AuthService)).subscribeOnKeycloakReady(() => resolve(true));
  });
}

