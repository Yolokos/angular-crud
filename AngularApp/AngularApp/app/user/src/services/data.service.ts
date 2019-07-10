import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'services/user';

@Injectable()
export class DataService {

    private url = "/api/Users";

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(this.url);
    }

    getUser(id: number) {
        return this.http.get(this.url + '/' + id, { observe: 'response' });
    }

    createUser(user: User) {
        return this.http.post(this.url, user, { observe: 'response' });
    }
    updateUser(user: User) {

        return this.http.put(this.url + '/' + user.id, user, { observe: 'response', responseType: 'text' });
    }
    deleteUser(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}