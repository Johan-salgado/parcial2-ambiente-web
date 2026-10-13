import { Routes } from '@angular/router';
import { HojaDeVidaComponent } from './pages/hoja-de-vida/hoja-de-vida.component';
import { AprendizajeCursoComponent } from './pages/aprendizaje-curso/aprendizaje-curso.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'hoja-de-vida', component: HojaDeVidaComponent },
  { path: 'aprendizaje-curso', component: AprendizajeCursoComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: '**', redirectTo: 'hoja-de-vida' }
];
