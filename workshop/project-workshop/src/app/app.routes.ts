import { Routes } from '@angular/router';
import { Home } from './features/home/home.js';
import { Themes } from './features/themes/themes.js';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'themes', component: Themes },
];
