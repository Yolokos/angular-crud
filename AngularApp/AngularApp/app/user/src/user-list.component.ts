import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './user';

@Component({
    templateUrl: './html/user-list.component.html',
    providers: [DataService]
})
export class UserListComponent implements OnInit {

    users: User[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getUsers().subscribe((data: User[]) => this.users = data);
    }

    delete(id: number) {
        this.dataService.deleteUser(id).subscribe(data => this.dataService.getUsers().subscribe((data: User[]) => this.users = data));
    }
}