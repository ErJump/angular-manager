import { UserService } from './../users.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user : any;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor (private service: UserService){
  }
  deleteUser(user : any){
    //this.service.deleteUser(user);
    this.userDeleted.emit(user);
  }
}
