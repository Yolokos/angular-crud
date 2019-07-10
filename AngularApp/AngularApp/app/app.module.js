var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './user/src/app.component';
import { UserListComponent } from './user/src/user-list.component';
import { UserDetailComponent } from './user/src/user-detail.component';
import { UserCreateComponent } from './user/src/user-create.component';
import { UserEditComponent } from './user/src/user-edit.component';
import { NotFoundComponent } from './user/src/not-found.component';
import { DataService } from './user/src/services/data.service';
import { UserFormComponent } from './user/src/user-form.component';
// определение маршрутов
var appRoutes = [
    { path: '', component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: '**', component: NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
            declarations: [AppComponent, UserListComponent, UserDetailComponent, UserCreateComponent, UserEditComponent, UserFormComponent, NotFoundComponent],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map