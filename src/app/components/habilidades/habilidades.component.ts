import { Component } from '@angular/core';
import { Habilidad } from '../../models/models';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html'
})
export class HabilidadesComponent {
  habilidades: Habilidad[] = [
    { nombre: 'Java', nivel: 'Intermedio', porcentaje: 65 },
    { nombre: 'C++', nivel: 'Intermedio', porcentaje: 60 },
    { nombre: 'C', nivel: 'Básico', porcentaje: 45 },
    { nombre: 'Python', nivel: 'Básico', porcentaje: 45 },
    { nombre: 'HTML y CSS', nivel: 'Intermedio', porcentaje: 60 },
    { nombre: 'JavaScript', nivel: 'Básico', porcentaje: 45 },
    { nombre: 'TypeScript y Angular', nivel: 'Básico', porcentaje: 35 },
    { nombre: 'Inglés (lo entiendo bien, hablar y escribir me cuesta)', nivel: 'Intermedio', porcentaje: 50 }
  ];
}
