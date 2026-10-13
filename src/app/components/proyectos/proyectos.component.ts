import { Component } from '@angular/core';
import { Proyecto } from '../../models/models';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      nombre: 'Librerías de cálculo de cuellos de botella',
      descripcion: 'Librerías para calcular cuellos de botella, usadas dentro de proyectos de programación más grandes.',
      tecnologias: ['Librerías', 'Programación']
    },
    {
      nombre: 'Menús interactivos',
      descripcion: 'Menús interactivos relacionados con materias de la carrera, hechos en JavaScript.',
      tecnologias: ['JavaScript']
    },
    {
      nombre: 'Videojuego educativo de Física 2',
      descripcion: 'Videojuego educativo con énfasis en los temas de la materia Física 2.',
      tecnologias: ['Unity']
    },
    {
      nombre: 'Aplicaciones móviles para Android',
      descripcion: 'Proyectos de programación móvil para Android desarrollados con Flutter.',
      tecnologias: ['Flutter', 'Android']
    }
  ];
}
