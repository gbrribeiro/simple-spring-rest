import { Address } from "./Address";

export class Student {
    id: string;
    name: string;
    lastName: string;
    birthDate: Date;
    age: number;
    addresses: Array<Address>;
    
    constructor(id:string, name:string, lastName:string, birthDate:Date, age:number, addresses:Array<Address>) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.age = age;
        this.addresses = addresses;
    }
}