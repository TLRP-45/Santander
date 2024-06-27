import { Injectable } from '@angular/core';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardList: Card[] = [

  ];

  constructor() { }

  public createCard(dni: number, uname: string): Card {
    var d: Date = new Date();
    var exYear: number = d.getFullYear() + 5;
    var nCard: Card = new Card (dni, Math.floor(Math.random() * 10000000), uname, Math.floor(Math.random() * 100), (new Date(exYear)))
    this.cardList.push(nCard)
    return nCard;
  }

  public getCards(dni: number) {
    let localUserCards: Card[] = [];
    for (let card in this.cardList) {
      if (this.cardList[card].id == dni) {
        localUserCards.push(this.cardList[card]);
      }
    }
    return localUserCards;
  }


}
