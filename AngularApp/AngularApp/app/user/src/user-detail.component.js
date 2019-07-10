var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(dataService, activeRoute) {
        this.dataService = dataService;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id)
            this.dataService.getUser(this.id)
                .subscribe(function (data) { console.log(data.status); _this.user = data.body; _this.loaded = true; });
    };
    UserDetailComponent = __decorate([
        Component({
            template: require('./html/user-detail.component.html'),
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
export { UserDetailComponent };
//# sourceMappingURL=user-detail.component.js.map