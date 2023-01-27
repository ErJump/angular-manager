import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-manager';
  userSelected = new User();
  formActive = false;
  updateUser(user : User){
    this.userSelected = user;
    this.formActive = true;
  }
  addNewUser(){
    this.formActive = true;
    this.userSelected = new User();
  }
}
