import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { User } from './user';
import { HttpResponse } from '@angular/common/http';

@Component({
    template: require('./html/user-detail.component.html'),
    providers: [DataService]
})
export class UserDetailComponent implements OnInit {

    id: number;
    user: User;
    loaded: boolean = false;

    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataService.getUser(this.id)
                .subscribe((data: HttpResponse<User>) => { console.log(data.status); this.user = data.body; this.loaded = true; });
    }
}