import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../users/overview/overview.component').then(m => m.PageUsersOverview),
  }
];
