import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EnlaceNavbar } from '../../models/models';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  // Los enlaces se definen aquí y se dibujan con @for en el HTML
  enlaces: EnlaceNavbar[] = [
    { ruta: '/hoja-de-vida', texto: 'Hoja de vida' },
    { ruta: '/aprendizaje-curso', texto: 'Aprendizaje del curso' },
    { ruta: '/videojuegos', texto: 'Videojuegos' }
  ];
}
