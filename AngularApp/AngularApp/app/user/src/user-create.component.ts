import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { User } from './user';

@Component({
    
    template: require('./html/user-create.component.html')
})
export class UserCreateComponent {
    user: User = new User();
    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.createUser(this.user).subscribe(data => this.router.navigateByUrl("/"))
    }
} 