import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component.js';
import { User } from './user/user.js';

import { DUMMY_USERS } from './dummy-users.js';
import { Tasks } from './tasks/tasks.js';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = 'u1'

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id:string){
    this.selectedUserId = id
  }
}
