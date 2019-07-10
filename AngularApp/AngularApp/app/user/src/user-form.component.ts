import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: './html/user-form.component.html'
})
export class UserFormComponent {
    @Input() user: User;
}