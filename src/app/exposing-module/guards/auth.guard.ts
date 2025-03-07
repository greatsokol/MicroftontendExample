import {inject} from "@angular/core";
import {CanActivateFn} from "@angular/router";
import {AuthService} from '@@auth-lib';

export const canActivate: CanActivateFn = () => {
  console.debug("mf-example: Can activate?");
  return inject(AuthService).isAuthenticated();
}
