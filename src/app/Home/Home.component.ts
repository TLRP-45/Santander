import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Client } from '../models/Client';
import { Card } from '../models/Card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private clientService: ClientService,
    private cardService: CardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem('token')
    if (token){
      this.decodify(token)
    }
  }

  public name: string = '';
  public eMail: string = '';
  public phoneNum: number = 0;
  public dni: number = 0;

  public userCardList: Card[] = [];


  public decodify(token: string) {
    const keydecodified = parseInt(atob(token));
    const activeUser = this.clientService.getData(keydecodified);
    this.name = activeUser.name;
    this.eMail = activeUser.mail;
    this.phoneNum = activeUser.phNumber;
    this.dni = activeUser.dni;
    this.userCardList = this.cardService.getCards(activeUser.dni);
  }

  public requestNewCard() {
    this.userCardList.push(this.cardService.createCard(this.dni, this.name));
  }

  public logOut() {
    if(this.loginService.logOut()){
      this.router.navigateByUrl('login')
    }
  }

}
