import { Routes } from '@angular/router';
import { PageLogin } from '@pages/login/login.component';

export const routes: Routes = [
  {
    path: '', component: PageLogin
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./layouts/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
