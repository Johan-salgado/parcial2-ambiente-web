import { Component } from '@angular/core';
import { Videojuego } from '../../models/models';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent {
  juegos: Videojuego[] = [
    {
      id: 1,
      titulo: 'Apex Legends',
      categoria: 'Shooter',
      desarrollador: 'Respawn Entertainment',
      anio: 2019,
      plataformas: 'PC, PlayStation, Xbox y Switch',
      descripcion: 'Battle royale gratuito por equipos con personajes que tienen habilidades únicas.'
    },
    {
      id: 2,
      titulo: 'Counter-Strike 2',
      categoria: 'Shooter',
      desarrollador: 'Valve',
      anio: 2023,
      plataformas: 'PC',
      descripcion: 'Shooter táctico por rondas donde dos equipos compiten colocando o desactivando una bomba.'
    },
    {
      id: 3,
      titulo: 'Grand Theft Auto V',
      categoria: 'Mundo abierto',
      desarrollador: 'Rockstar North',
      anio: 2013,
      plataformas: 'PC, PlayStation y Xbox',
      descripcion: 'Acción en mundo abierto con tres protagonistas y una gran ciudad para explorar.'
    },
    {
      id: 4,
      titulo: 'Minecraft',
      categoria: 'Mundo abierto',
      desarrollador: 'Mojang',
      anio: 2011,
      plataformas: 'Multiplataforma',
      descripcion: 'Juego sandbox donde se explora, se construye y se sobrevive en mundos hechos de bloques.'
    },
    {
      id: 5,
      titulo: 'Darksiders II',
      categoria: 'Acción y aventura',
      desarrollador: 'Vigil Games',
      anio: 2012,
      plataformas: 'PC, PlayStation, Xbox y Switch',
      descripcion: 'Aventura de acción con toques de RPG donde Muerte recorre mazmorras y combate enemigos.'
    },
    {
      id: 6,
      titulo: 'Dead Cells',
      categoria: 'Acción y aventura',
      desarrollador: 'Motion Twin',
      anio: 2018,
      plataformas: 'Multiplataforma',
      descripcion: 'Juego 2D de acción tipo roguelite con combate rápido y mapas que cambian en cada partida.'
    }
  ];

  // Categoría elegida en los botones de filtro ('Todos' muestra todo)
  categoriaSeleccionada = 'Todos';

  // Lista de categorías sin repetir, calculada a partir de los datos
  get categorias(): string[] {
    const lista = this.juegos.map((juego) => juego.categoria);
    return ['Todos', ...new Set(lista)];
  }

  // Juegos que se muestran según la categoría elegida
  get juegosFiltrados(): Videojuego[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.juegos;
    }
    return this.juegos.filter((juego) => juego.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }
}
