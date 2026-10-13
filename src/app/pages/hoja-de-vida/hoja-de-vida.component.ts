import { Component } from '@angular/core';
import { PresentacionComponent } from '../../components/presentacion/presentacion.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FormacionComponent } from '../../components/formacion/formacion.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';

@Component({
  selector: 'app-hoja-de-vida',
  imports: [PresentacionComponent, ContactoComponent, FormacionComponent, HabilidadesComponent, ProyectosComponent],
  templateUrl: './hoja-de-vida.component.html'
})
export class HojaDeVidaComponent {}
