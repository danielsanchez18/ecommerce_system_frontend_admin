import { Routes } from '@angular/router';

export const ROLE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../roles/overview/overview.component').then(m => m.PageRolesOverview),
  }
];
