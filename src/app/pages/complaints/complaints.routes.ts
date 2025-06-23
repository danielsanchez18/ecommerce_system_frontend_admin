import { Routes } from '@angular/router';

export const COMPLAINT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview.component').then(m => m.PageComplaintsOverview),
  }
];


