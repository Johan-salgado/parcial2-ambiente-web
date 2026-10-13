import { Component } from '@angular/core';
import { Contacto } from '../../models/models';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  contactos: Contacto[] = [
    { tipo: 'Correo', valor: 'johan.salgado01@uceva.edu.co' },
    { tipo: 'Ciudad', valor: 'Tuluá, Valle del Cauca' },
    { tipo: 'GitHub', valor: 'github.com/Johan-salgado', enlace: 'https://github.com/Johan-salgado' }
  ];
}
