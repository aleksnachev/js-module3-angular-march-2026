import { Routes } from '@angular/router';
import { Home } from './features/home/home.js';
import { Themes } from './features/themes/themes.js';
import { Login } from './features/auth/login/login.js';
import { Register } from './features/auth/register/register.js';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'themes', component: Themes },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

];
