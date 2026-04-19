import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service.js';
import { UserService } from '../../../core/services/user.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router)

  username = '';
  email = '';
  password = '';
  tel = '';
  rePassword = '';

  onRegister(): void {
    if (!this.email) {
      alert('Email is required');
      return;
    }
    if (!this.password) {
      alert('Password is required');
      return;
    }
    if (this.password !== this.rePassword) {
      alert('Passwords dont match');
      return;
    }

    const newUser = {
      _id: this.generateId(),
      username: this.username,
      email: this.email,
      tel: '+359' + this.tel,
      password: this.password
    };

    this.router.navigate(['/themes'])
  }

  private generateId():string {
    return Math.random().toString(36).substring(2,15)
  }
}
