import { Component } from '@angular/core';
import { Actividad, Tema } from '../../models/models';

@Component({
  selector: 'app-aprendizaje-curso',
  templateUrl: './aprendizaje-curso.component.html'
})
export class AprendizajeCursoComponent {
  // Temas vistos en el curso con sus conceptos clave
  temas: Tema[] = [
    {
      id: 1,
      nombre: 'HTML',
      categoria: 'Fundamentos',
      descripcion: 'Lenguaje de marcado que define la estructura de una página web.',
      conceptos: ['Etiquetas semánticas', 'Formularios', 'Enlaces, imágenes y listas']
    },
    {
      id: 2,
      nombre: 'CSS',
      categoria: 'Fundamentos',
      descripcion: 'Lenguaje de estilos que controla la apariencia de la página.',
      conceptos: ['Selectores y modelo de caja', 'Flexbox y diseño responsivo', 'Colores y tipografía']
    },
    {
      id: 3,
      nombre: 'JavaScript',
      categoria: 'Lenguajes',
      descripcion: 'Lenguaje que le da interactividad a las páginas web.',
      conceptos: ['Variables, funciones y arreglos', 'Manejo del DOM', 'Eventos']
    },
    {
      id: 4,
      nombre: 'TypeScript',
      categoria: 'Lenguajes',
      descripcion: 'Superconjunto de JavaScript que agrega tipado estático.',
      conceptos: ['Tipos de datos', 'Interfaces y types', 'Se transpila a JavaScript']
    },
    {
      id: 5,
      nombre: 'Angular',
      categoria: 'Framework',
      descripcion: 'Framework para construir aplicaciones web de una sola página (SPA).',
      conceptos: ['Aplicación basada en componentes', 'Plantillas y enlace de datos', 'Angular CLI']
    },
    {
      id: 6,
      nombre: 'Componentes',
      categoria: 'Framework',
      descripcion: 'Piezas reutilizables con su propia lógica y plantilla HTML.',
      conceptos: ['Decorador @Component', 'Composición de componentes', 'Renderizado con @for y @if']
    },
    {
      id: 7,
      nombre: 'Rutas',
      categoria: 'Framework',
      descripcion: 'Enrutamiento para navegar entre páginas sin recargar la aplicación.',
      conceptos: ['Definición de rutas', 'routerLink y router-outlet', 'Redirecciones']
    },
    {
      id: 8,
      nombre: 'Git y GitHub',
      categoria: 'Herramientas',
      descripcion: 'Control de versiones y plataforma para publicar y compartir código.',
      conceptos: ['Commits descriptivos', 'Repositorios locales y remotos', 'Push y pull']
    }
  ];

  // Proyectos y actividades desarrollados durante el curso
  actividades: Actividad[] = [
    {
      id: 1,
      nombre: 'Taller 2 - HTML y CSS',
      tipo: 'Taller',
      descripcion: 'Taller para practicar la estructura con HTML y los estilos con CSS.',
      enlace: 'https://github.com/Johan-salgado/-Taller-2---HTML-CSS'
    },
    {
      id: 2,
      nombre: 'Parcial 1',
      tipo: 'Parcial',
      descripcion: 'Primer parcial del curso de Programación en Ambiente Web I.',
      enlace: 'https://github.com/Johan-salgado/Parcial1-ambiente-web'
    },
    {
      id: 3,
      nombre: 'Manejo del DOM con JavaScript',
      tipo: 'Actividad en clase',
      descripcion: 'Actividad para seleccionar y modificar elementos de la página con JavaScript.',
      enlace: 'https://github.com/Johan-salgado/Actividad-en-Clase---Manejo-del-DOM-con-JS'
    },
    {
      id: 4,
      nombre: 'Taller 3 - JavaScript y TypeScript',
      tipo: 'Taller',
      descripcion: 'Taller de ejercicios con JavaScript y TypeScript.',
      enlace: 'https://github.com/Johan-salgado/Taller-3---Javascript-Typescript'
    }
  ];

  tecnologias: string[] = [
    'HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'TypeScript', 'Angular', 'Git', 'GitHub', 'GitHub Desktop'
  ];
}
