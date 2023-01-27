import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html', 
    styleUrls: ['./users.component.scss']   
})
export class UsersComponent implements OnInit{
    title = 'Users';
    public users : any = [];
    constructor(private service: UserService){
        
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
}