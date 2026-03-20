import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component.js';
import { User } from './user/user.js';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
}
