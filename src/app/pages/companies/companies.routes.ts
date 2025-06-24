import { Routes } from '@angular/router';

export const COMPANY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../companies/overview/overview.component').then(m => m.PageCompaniesOverview),
  },
  {
    path: 'agregar',
    loadComponent: () => import('../companies/add/add.component').then(m => m.PageCompaniesAdd),
  },
  {
    path: ':id',
    loadComponent: () => import('../companies/details/details.component').then(m => m.PageCompaniesDetails),
  },
  {
    path: ':id/editar',
    loadComponent: () => import('../companies/edit/edit.component').then(m => m.PageCompaniesEdit),
  }
];
