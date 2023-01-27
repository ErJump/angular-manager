import { UserService } from './../services/users.service';
import { Component, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user : User | any;
  constructor(private uS: UserService) { }
  saveUser() {
    if (this.user.id) {
      this.uS.updateUser(this.user);
    } else {
      this.uS.addUser(this.user);
    }
  }
}
