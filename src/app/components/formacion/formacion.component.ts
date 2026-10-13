import { Component } from '@angular/core';
import { Formacion } from '../../models/models';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html'
})
export class FormacionComponent {
  estudios: Formacion[] = [
    {
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Unidad Central del Valle del Cauca (UCEVA)',
      estado: 'En curso - 7.º semestre'
    },
    {
      titulo: 'Bachiller técnico con énfasis en mecánica industrial',
      estado: 'Finalizado'
    }
  ];
}
