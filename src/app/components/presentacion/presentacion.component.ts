import { Component } from '@angular/core';
import { Estudiante } from '../../models/models';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html'
})
export class PresentacionComponent {
  estudiante: Estudiante = {
    nombre: 'Johan Eliu Salgado Castro',
    codigo: '230232033',
    carrera: 'Ingeniería de Sistemas',
    universidad: 'Unidad Central del Valle del Cauca (UCEVA)',
    semestre: '7.º semestre',
    perfil:
      'Soy estudiante de Ingeniería de Sistemas y he trabajado en Java, Python, C y C++. ' +
      'Me interesa el desarrollo web front-end: me gusta crear interfaces claras, ordenadas y ' +
      'responsivas, con buenas prácticas de accesibilidad. Ahora estoy fortaleciendo JavaScript ' +
      'y quiero seguir aprendiendo y mejorando en distintas áreas de la ingeniería.'
  };
}
