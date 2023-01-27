import { UserInterface } from './../interfaces/userI';
export class User implements UserInterface {
    id: number;
    name: string;
    lastname: string;
    email: string;
    fiscalcode: string;
    province: string;
    phone: string;
    age: number;
    constructor(id: number, name: string, lastname: string, email: string, fiscalcode: string, province: string, phone: string, age: number){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.fiscalcode = fiscalcode;
        this.province = province;
        this.phone = phone;
        this.age = age;
    }
}