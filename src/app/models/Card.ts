export class Card {
    public id?: number;
    public cardNumber?: number;
    public cardOwner?: string;
    public ccv?: number;
    public expirationDate?: Date;

    constructor(id: number, cardNumber: number, cardOwner: string, ccv: number, expirationDate: Date) {
        this.id = id;
        this.cardNumber = cardNumber;
        this.cardOwner = cardOwner;
        this.ccv = ccv;
        this.expirationDate = expirationDate;
    }
}