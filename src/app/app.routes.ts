import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio',
    }, 
    {
        path: 'inicio',
        title: 'Inicio',
        component: HomeComponent
    },
    {
        path: '**',
        title: 'Página No Encontrada',
        redirectTo: 'inicio',
      },
];
