import { Routes } from '@angular/router';
import { Home } from './features/home/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
    path: '**', // si intenta acceder a una ruta que no existe, lo redirigimos a la página de inicio
    redirectTo: ''
    }
];
