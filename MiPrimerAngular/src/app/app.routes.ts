import { Routes } from '@angular/router';
import { Inicio } from './page/inicio/inicio';
import { Contacto } from './page/contacto/contacto';
import { Ejercicios } from './page/ejercicios/ejercicios';

export const routes: Routes = [
{ path: 'inicio', component: Inicio },
{ path: 'contacto', component: Contacto },
{ path: 'ejercicios', component: Ejercicios }
];
