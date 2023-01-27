import { Injectable } from '@angular/core';
import { User } from '../classes/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  users: Array<User> = [
    {
      id: 1,
      name: 'Hidran1',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 2,
      name: 'Hidran2',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Hidran3',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 4,
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    }
  ]
  getUsers(){
    return this.users;
  }
  deleteUser(user : User){
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
  updateUser(user : User) {
    const index = this.users.findIndex((u: User) => u.id === user.id);
    this.users[index] = user;
  }
  addUser(user : User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
}