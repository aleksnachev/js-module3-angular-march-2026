import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service.js';
import { Router, RouterLink } from '@angular/router';
import { emailValidator } from '../../../shared/validators/email.validator.js';
import { passwordsMatchValidator } from '../../../shared/validators/passwords-match.validator.js';
import { NotificationService } from '../../../core/services/notification.service.js';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private notifService = inject(NotificationService)
  private fb = inject(FormBuilder);
  private router = inject(Router);

  registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator()]],
    tel: [''],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      { validators: passwordsMatchValidator },
    ),
  });

  isLoading = false;

  get passwordsGroup(): FormGroup {
    return this.registerForm.get("passwords") as FormGroup;
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    

    const { username, email, tel, passwords } = this.registerForm.value;

    const userData = {
      username,
      email,
      tel: tel ? "+359" + tel : undefined,
      password: passwords.password,
    };

    this.authService.register(userData).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.isLoading = false;
        this.notifService.showSuccess('Register successful');
        this.router.navigate(["/themes"]);
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}