import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Client } from '../models/Client';
import { CreateClientDto } from '../DTO/createClient.dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  

  public clients: Client[] = [
    new Client ('usuario', 'password', 123456789, 'mymail@example.com', 909876543),
  ];

  public saveNewUser(regUser: CreateClientDto){
    this.clients.push(new Client(regUser.name, regUser.password, regUser.dni, regUser.mail, regUser.phone));
    console.log(this.clients.length);
  }

  public find(user: number, pass: string) {
    for (const entity in this.clients){
      if (this.clients[entity].dni == user){
        if (this.clients[entity].password === pass) {
          return (0)
        }
        else {
          return (1)
        }
      }
    }
    return (-1)
    
  }

  public getDataReg(user: number): Observable<any> {
    console.log(this.clients.length);
    for (const entity in this.clients){
      console.log(this.clients[entity].dni == user);
      if (this.clients[entity].dni == user){
        return of (false);
      }
    }
    return of (true)
  }

  public getData(user: number): Client {
    for (let entity in this.clients){
      if (this.clients[entity].dni == user){
        return (this.clients[entity]);
      }
    }
    return (new Client('','',0,'',0)) 
  }

constructor() { }



}
