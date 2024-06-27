export class Client {
    public name: string;
    public password: string;
    public dni: number;
    public mail: string;
    public phNumber: number;

    constructor (name: string, password: string, dni: number, mail: string, phnumber: number) {
        this.name = name;
        this.password = password;
        this.dni = dni;
        this.mail = mail;
        this.phNumber = phnumber;
    }
}