import { UserService } from '../services/users.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user : User | any;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter(); 
  constructor (private service: UserService){
  }
  deleteUser(user : User){
    //this.service.deleteUser(user);
    this.userDeleted.emit(user);
  }
  updateUser(user : User){
    this.onSelectUser.emit(user);
  }
}
