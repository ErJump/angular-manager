import { UserService } from '../services/users.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html', 
    styleUrls: ['./users.component.scss']   
})
export class UsersComponent implements OnInit{
    title = 'Users';
    public users : Array<User> = [];
    @Output() updateUser = new EventEmitter<User>();
    constructor(private service: UserService){
        
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
    onDeleteUser(user : User){
        this.service.deleteUser(user);
    }
    onSelectUser(user : User){
        const userCopy = {...user};
        this.updateUser.emit(userCopy);
    }
}