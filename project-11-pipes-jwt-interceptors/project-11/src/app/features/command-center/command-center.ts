import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-center',
  imports: [],
  templateUrl: './command-center.html',
  styleUrl: './command-center.css',
})
export class CommandCenter {
  constructor(private authService:AuthService, private router:Router){}

  onLogout():void {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
