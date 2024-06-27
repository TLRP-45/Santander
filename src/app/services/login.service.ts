import { Injectable, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Client } from '../models/Client';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(
  private router: Router,
  private clientService: ClientService,
) { }





public login(u: number, p:string): Observable<number>{
  let authUser = this.clientService.find(u, p);
  if(authUser == 0){
    const token: string = btoa(u.toString())
    sessionStorage.setItem('token', token)
    return of (0)
  }else if (authUser == 1){
    return of (1);
  }
  else {
    return of (-1);
  }
}


public logOut(): boolean{
  if(sessionStorage.getItem('token')){
    sessionStorage.removeItem('token')
    return true
  }

  return false
}

public isLoggedIn(): Observable<boolean> {
  let token = sessionStorage.getItem('token')
  if (token != null){
    return of(true)
  }

  this.router.navigateByUrl('login')
  return of(false)
}

public isAlreadyLogged(): Observable<boolean>{
  if (sessionStorage.getItem('token')) {
    this.router.navigateByUrl('home');
    return of(false);
  } 

  return of(true);
}

}
