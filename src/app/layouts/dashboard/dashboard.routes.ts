import { Routes } from '@angular/router';
import { LayoutDashboard } from './dashboard.component';
import { COMPLAINT_ROUTES } from '../../pages/complaints/complaints.routes';


export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
        data: { breadcrumb: 'Overview' }
      },
      {
        path: 'empresas',
        loadChildren: () => import('@pages/companies/companies.routes').then(m => m.COMPANY_ROUTES),
        data: { breadcrumb: 'Empresas' }
      },
      {
        path: 'reclamos',
        loadChildren: () => import('@pages/complaints/complaints.routes').then(m => m.COMPLAINT_ROUTES),
        data: { breadcrumb: 'Reclamos' }
      },
      {
        path: 'usuarios',
        loadChildren: () => import('@pages/users/users.routes').then(m => m.USER_ROUTES),
        data: { breadcrumb: 'Usuarios' }
      },
      {
        path: 'roles',
        loadChildren: () => import('@pages/roles/roles.routes').then(m => m.ROLE_ROUTES),
        data: { breadcrumb: 'Roles' }
      },
    ]
  }
];
