import { Routes } from '@angular/router';
import { Missions } from './features/missions/missions.js';
import { Countdown } from './features/countdown/countdown.js';
import { Login } from './features/login/login.js';
import { NotFound } from './features/not-found/not-found.js';
import { MissionDetails } from './features/mission-details/mission-details.js';
import { missionResolver } from './guards/mission.resolver.js';
import { CommandCenter } from './features/command-center/command-center.js';
import { authGuard } from './guards/auth.guard.js';
import { CrewRegister } from './features/crew-register/crew-register.js';
import { MissionForm } from './features/mission-form/mission-form.js';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: Missions },
  { path: 'missions/:id', component: MissionDetails, resolve: { mission: missionResolver } },
  { path: 'countdown', component: Countdown },

  { path: 'crew-register', component: CrewRegister },
  { path: 'new-mission', component: MissionForm },

  {
    path: 'command-center',
    loadComponent: () => import('./features/command-center/command-center.js')
    .then(m => m.CommandCenter),
    canActivate: [authGuard],
  },
  { path: 'login', component: Login },
  { path: '**', component: NotFound },
];
