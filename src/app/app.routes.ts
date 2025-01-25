import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista-avisos',
    loadComponent: () => import('./paginas/lista-avisos/lista-avisos.page').then( m => m.ListaAvisosPage)
  },
  {
    path: 'form-avisos',
    loadComponent: () => import('./paginas/form-avisos/form-avisos.page').then( m => m.FormAvisosPage)
  },
];
