// Interfaces que describen la forma de los datos de la aplicación

export interface Estudiante {
  nombre: string;
  codigo: string;
  carrera: string;
  universidad: string;
  semestre: string;
  perfil: string;
}

export interface Contacto {
  tipo: string;
  valor: string;
  enlace?: string; // solo si el dato es un link
}

export interface Formacion {
  titulo: string;
  institucion?: string;
  estado: string;
}

export interface Habilidad {
  nombre: string;
  nivel: string;
  porcentaje: number; // se usa para la barra de progreso
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

export interface Tema {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  conceptos: string[];
}

export interface Actividad {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  enlace: string;
}

export interface Videojuego {
  id: number;
  titulo: string;
  categoria: string;
  desarrollador: string;
  anio: number;
  plataformas: string;
  descripcion: string;
}

export interface EnlaceNavbar {
  ruta: string;
  texto: string;
}
