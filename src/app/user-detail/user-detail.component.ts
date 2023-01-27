import { UserService } from './../services/users.service';
import { Component, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  private userCopy: User | any;
  private __user: User | any;
  @Input() set user(user: User | any) {
    this.__user = user;
    this.userCopy = {...user};
  }
  get user() {
    return this.__user;
  }
  constructor(private uS: UserService) { }
  saveUser() {
    if (this.user.id) {
      this.uS.updateUser(this.user);
    } else {
      this.uS.addUser(this.user);
    }
  }
  resetForm() {
    if (!this.user.id) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
}
