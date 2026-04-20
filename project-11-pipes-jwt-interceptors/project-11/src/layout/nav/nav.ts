import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../app/services/auth.service.js';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  private authService = inject(AuthService);

  isLoggedIn$ = this.authService.isLoggedIn$;
  user$ = this.authService.user$;
}
