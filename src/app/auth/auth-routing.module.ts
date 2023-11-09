import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { authGuard } from './service/auth.guard';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AuthModule } from './auth.module';

const routes: Routes = [{ path: 'home', component: DashboardComponent, canActivate: [authGuard] }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    AuthModule
  ],
  providers: [],

})
export class AuthRoutingModule { }
