import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './user/src/app.component';
import { UserListComponent } from './user/src/user-list.component';
import { UserDetailComponent } from './user/src/user-detail.component';
import { UserCreateComponent } from './user/src/user-create.component';
import { UserEditComponent } from './user/src/user-edit.component';
import { NotFoundComponent } from './user/src/not-found.component';
import { DataService } from './user/src/services/data.service';
import { UserFormComponent } from './user/src/user-form.component';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, UserListComponent, UserDetailComponent, UserCreateComponent, UserEditComponent, UserFormComponent, NotFoundComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }