import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InputError } from '../../../shared/directives/input-error.directive.js';
import { Api } from '../../../core/services/api.service.js';
import { NotificationService } from '../../../core/services/notification.service.js';

@Component({
  selector: 'app-new-theme',
  imports: [FormsModule, InputError],
  templateUrl: './new-theme.html',
  styleUrl: './new-theme.css',
})
export class NewTheme {
  @ViewChild('themeForm') themeForm!: NgForm;

  themeName = '';
  postText = '';
  isLoading = false;

  private router = inject(Router);
  private apiService = inject(Api);
  private notifService = inject(NotificationService);

  onSubmit(): void {
    if (this.themeForm.invalid) {
      return;
    }
    this.isLoading = true;

    this.apiService.createTheme({ themeName: this.themeName, postText: this.postText }).subscribe({
      next: (theme) => {
        this.isLoading = false;
        this.notifService.showSuccess('Theme created successfuly')
        this.router.navigate(['/themes', theme._id]);
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }
}
