# Parcial 2 - Programación en Ambiente Web I

Aplicación web desarrollada con **Angular 20** y **Bootstrap 5** (tema oscuro) como segundo parcial del curso Programación en Ambiente Web I.

## Datos del estudiante

| | |
|---|---|
| **Nombre** | Johan Eliu Salgado Castro |
| **Código** | 230232033 |
| **Programa** | Ingeniería de Sistemas - 7.º semestre |
| **Universidad** | Unidad Central del Valle del Cauca (UCEVA) |
| **Docente** | Jesús David Mejía Vergara |
| **GitHub** | [Johan-salgado](https://github.com/Johan-salgado) |

## Descripción

La aplicación tiene tres páginas y una barra de navegación superior que permite moverse entre ellas sin recargar el sitio:

1. **Hoja de vida** (`/hoja-de-vida`): presenta mi perfil, contacto, formación académica, habilidades y proyectos realizados. La página se arma combinando varios componentes.
2. **Aprendizaje del curso** (`/aprendizaje-curso`): muestra los temas vistos en el curso con sus conceptos clave, las actividades y proyectos desarrollados, y las tecnologías utilizadas.
3. **Videojuegos** (`/videojuegos`): página de tema libre con mis videojuegos favoritos, que se pueden filtrar por categoría.

## Tecnologías utilizadas

- Angular 20 (componentes standalone y enrutamiento)
- TypeScript
- Bootstrap 5.3
- HTML y CSS
- Git y GitHub Desktop

## Requisitos del parcial

| Requisito | Dónde se cumple |
|---|---|
| Uso de Angular | Todo el proyecto |
| Enrutamiento y navegación | `app.routes.ts` y componente `navbar` |
| Barra de navegación superior | `components/navbar` |
| Bootstrap 5 | Configurado en `angular.json`, usado en todas las vistas |
| Interfaces o types para los datos | `models/models.ts` |
| Hoja de vida con componentes | `components/` (presentación, contacto, formación, habilidades y proyectos) |
| Renderizado dinámico con `@for` | Páginas de aprendizaje del curso y videojuegos (también en navbar y hoja de vida) |
| Código organizado | Carpetas `components/`, `pages/` y `models/` |
| Repositorio en GitHub con commits descriptivos | Este repositorio |

## Estructura del proyecto

```
src/app/
├── components/            Componentes reutilizables
│   ├── navbar/            Barra de navegación superior
│   ├── presentacion/      Nombre, carrera y perfil profesional
│   ├── contacto/          Datos de contacto
│   ├── formacion/         Formación académica
│   ├── habilidades/       Conocimientos y habilidades
│   └── proyectos/         Experiencia y proyectos realizados
├── pages/                 Páginas que se cargan desde las rutas
│   ├── hoja-de-vida/
│   ├── aprendizaje-curso/
│   └── videojuegos/
├── models/
│   └── models.ts          Interfaces con la forma de los datos
├── app.routes.ts          Definición de las rutas
├── app.config.ts          Configuración de la aplicación
└── app.ts / app.html      Componente raíz
```

## Cómo ejecutar el proyecto

Requisitos: tener instalado [Node.js](https://nodejs.org/) y Angular CLI (`npm install -g @angular/cli`).

```bash
# 1. Clonar el repositorio
git clone https://github.com/Johan-salgado/parcial2-ambiente-web.git

# 2. Entrar a la carpeta del proyecto
cd parcial2-ambiente-web

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
ng serve
```

Después abrir `http://localhost:4200/` en el navegador.

Para generar la versión de producción:

```bash
ng build
```
