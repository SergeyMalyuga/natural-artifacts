import { Routes } from '@angular/router';
import { AppRoute } from './core/constants/const';

export const routes: Routes = [
  {
    path: AppRoute.MAIN,
    title: 'Main',
    loadComponent: () => import('./pages/main/main.component').then((m) => m.MainComponent),
  },
];
