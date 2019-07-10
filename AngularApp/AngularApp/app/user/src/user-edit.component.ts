import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { User } from './user';
import { HttpResponse } from '@angular/common/http';

@Component({
    template: require('./html/user-edit.component.html')
})
export class UserEditComponent implements OnInit {

    id: number;
    user: User;
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit(): void {
        if (this.id) {
            this.dataService.getUser(this.id).subscribe((data: HttpResponse<User>) => {
                this.user = data.body
            });
            if (this.user != null) {
                this.loaded = true;
            }
        }
    }

    save() {
        this.dataService.updateUser(this.user).subscribe(data => this.router.navigateByUrl("/"));
    }    
}