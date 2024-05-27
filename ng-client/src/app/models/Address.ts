export class Address {
    street: string;
    number: number;
    cep: number;
    contactPhone: String;
    
    constructor(street:string, number:number, cep:number, contactPhone:string) {
        this.street=street;
        this.number=number;
        this.cep=cep;
        this.contactPhone=contactPhone;
    }
}
