import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [AuthRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
