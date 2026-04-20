import { Routes } from '@angular/router';
import { Home } from './features/home/home.js';
import { Themes } from './features/themes/themes.js';
import { Login } from './features/auth/login/login.js';
import { Register } from './features/auth/register/register.js';
import { ThemeContent } from './features/themes/theme-content/theme-content.js';
import { authGuard } from './core/guards/auth.guard.js';
import { Profile } from './features/profile/profile.js';
import { NotFound } from './features/not-found/not-found.js';
import { NewTheme } from './features/themes/new-theme/new-theme.js';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: Home },
  { path: 'home', loadComponent: () => import('./features/home/home.js').then((m) => m.Home) },

  // { path: 'login', component: Login },
  { path: 'login', loadComponent: () => import('./features/auth/login/login.js').then((m) => m.Login) },

  // { path: 'register', component: Register },
  { path: 'register', loadComponent: () => import('./features/auth/register/register.js').then((m) => m.Register) },

  // { path: 'themes', component: Themes },
  { path: 'themes', loadComponent: () => import('./features/themes/themes.js').then((m) => m.Themes) },

  // { path: 'themes/:themeId', component: ThemeContent },
  {
    path: 'themes/:themeId',
    loadComponent: () => import('./features/themes/theme-content/theme-content.js').then((m) => m.ThemeContent),
  },

  // { path: 'add-theme', component: NewTheme, canActivate: [authGuard] },
  {
    path: 'add-theme',
    loadComponent: () => import('./features/themes/new-theme/new-theme.js').then((m) => m.NewTheme),
    canActivate: [authGuard],
  },

  // { path: 'profile', component: Profile, canActivate: [authGuard] },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.js').then((m) => m.Profile),
    canActivate: [authGuard],
  },

  // { path: "**", component: NotFound },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.js').then((m) => m.NotFound) },
];
