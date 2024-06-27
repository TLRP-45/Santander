import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { authGuard, notLogged } from './guards/auth.gaurd';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [notLogged]
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [notLogged]
  },

  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
