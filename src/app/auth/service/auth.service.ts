import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '../auth.module';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: AuthModule,
})
export class AuthService {
  isLoggedIn = JSON.parse(<string>SharedModule.getLocalStorage()) || {};

  constructor(private http: HttpClient, private router: Router) { }

  logIn(value: Partial<{ user: string | null; password: string | null }>) {
    return this.http
      .post(
        `${environment.API}/usuario/autenticar?login=${value.user}&senha=${value.password}`,
        {}
      )
      .subscribe((res: any) => {
        if (res.autenticado === true) {
          this.isLoggedIn.autenticado = true;
          this.router.navigate(['/home']);
        } else {
          this.isLoggedIn.autenticado = false;
        }
        SharedModule.saveLocalStorage(res);
      });
  }
  reAuth() {
    const tokenStorage = JSON.parse(
      <string>SharedModule.getLocalStorage()
    ).token;
    this.http
      .get(
        `${environment.API}/usuario/renovar-ticket?token=${tokenStorage}`,
        {}
      )
      .subscribe((res: any) => { });

    return tokenStorage;
  }

}
