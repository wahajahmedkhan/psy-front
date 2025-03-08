import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const nonAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('auth_token');
  
  if (token) {
    // If user is already authenticated, redirect to AI chatbot page
    router.navigate(['/aichatbot']);
    return false;
  } else {
    // If user is not authenticated, allow access to sign-in/sign-up pages
    return true;
  }
};
