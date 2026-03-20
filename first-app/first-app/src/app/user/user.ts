import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users.js';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone:true,
})
export class User {
  selectedUser = DUMMY_USERS[randomIndex]
}
