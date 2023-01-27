import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-manager';
  userSelected : User | any;
  updateUser(user : User){
    this.userSelected = user;
  }
}
