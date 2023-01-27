import { Component, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user : User | any;
  saveUser() {
    alert(this.user.name)
  }
}
