import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('auth_token');
  
  if (token) {
    return true;
  } else {
    router.navigate(['/sign-in']);
    return false;
  }
};
