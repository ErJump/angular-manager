import { UserService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html', 
    styleUrls: ['./users.component.scss']   
})
export class UsersComponent implements OnInit{
    title = 'Users';
    public users : Array<User> = [];
    constructor(private service: UserService){
        
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
    onDeleteUser(user : User){
        this.service.deleteUser(user);
    }
}