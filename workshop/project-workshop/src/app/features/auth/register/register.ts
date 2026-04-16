import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service.js';
import { UserService } from '../../../core/services/user.service.js';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService =  inject(AuthService)
  private userService =  inject(UserService)


}
