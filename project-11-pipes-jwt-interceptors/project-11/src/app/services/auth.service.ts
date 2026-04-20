import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface.js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = signal(false);

  isLoggedIn(): boolean {
    return this.loggedIn();
  }

  login(username: string = 'cosmonaut_12221'): void {
    const fakeToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY29zbW9uYXV0Iiwicm9sZSI6ImFzdHJvbmF1dCJ9.demo';
    const user: User = {
      id: 1,
      username: username,
      email: `${username}@space.galaxy`,
      role: 'astronaut',
    };

    localStorage.setItem('authToken', fakeToken);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  private checkStoredAuth(): void {
    const token = localStorage.getItem('authToken');
    const userJson = localStorage.getItem('user');

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson) as User;
      } catch {
        this.logout();
      }
    }
  }
}
