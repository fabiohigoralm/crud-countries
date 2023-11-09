import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SharedModule } from 'src/app/shared/shared.module';


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn.autenticado) {
    return true;
  }
  return router.parseUrl('/');
};

