import { Routes } from '@angular/router';
import { Missions } from './features/missions/missions.js';
import { Countdown } from './features/countdown/countdown.js';
import { Login } from './features/login/login.js';
import { NotFound } from './features/not-found/not-found.js';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: Missions },
  { path: 'countdown', component: Countdown },
  { path: 'login', component: Login },
  { path: '**', component: NotFound },
];
