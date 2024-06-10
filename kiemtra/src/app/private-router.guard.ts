import { CanActivateFn } from '@angular/router';

export const privateRouterGuard: CanActivateFn = (route, state) => {
  return true;
};
