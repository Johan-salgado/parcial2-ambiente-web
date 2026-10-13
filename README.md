# Parcial 2 - Programación en Ambiente Web I

Aplicación web hecha con Angular 20 y Bootstrap 5 (tema oscuro).

**Estudiante:** Johan Eliu Salgado Castro - 230232033
**Universidad:** Unidad Central del Valle del Cauca (UCEVA)

## Páginas
- **Hoja de vida** (`/hoja-de-vida`): se arma con los componentes `presentacion`, `contacto`, `formacion`, `habilidades` y `proyectos`.
- **Aprendizaje del curso** (`/aprendizaje-curso`): temas, actividades y tecnologías generados con `@for`.
- **Videojuegos** (`/videojuegos`): tema libre, tarjetas generadas con `@for` y filtro por categoría.

## Estructura
```
src/app/
  components/   componentes reutilizables (navbar, presentacion, contacto, ...)
  pages/        páginas que se cargan desde las rutas
  models/       interfaces TypeScript con la forma de los datos
  app.routes.ts definición de las rutas
```

## Cómo ejecutarlo
```bash
npm install
ng serve
```
Luego abrir `http://localhost:4200/`.
