import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class ReauthInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('pais')) {
      this.authService.reAuth()
    }
    return next.handle(request);
  }
}
