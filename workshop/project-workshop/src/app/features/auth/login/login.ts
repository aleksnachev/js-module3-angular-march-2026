import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service.js';
import { InputError } from '../../../shared/directives/input-error.directive.js';
import { emailValidator } from '../../../shared/validators/email.validator.js';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, InputError],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required, emailValidator],
    password: ['', Validators.required, Validators.minLength(5)],
  });

  isLoading = false;
  errorMessage = '';

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: (user) => {
        this.isLoading = false
        if(user){
          this.router.navigate(['/themes'])
        }else {
          this.errorMessage = 'Invalid email or password'
        }
      },
      error: (err) => {
        this.isLoading = false
        this.errorMessage = err.error?.message || 'Login failed.Try again'
      }
    })
  }
}
