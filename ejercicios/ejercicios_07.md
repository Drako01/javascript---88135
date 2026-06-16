# Ejercicios clase 10 - npm, React y Next.js

## 1. Inicializar el proyecto

1. Ejecutar `npm install`.
2. Revisar que se haya creado `node_modules/` y `package-lock.json`.
3. Levantar el servidor con `npm run dev`.
4. Abrir `http://localhost:3000`.

## 2. Navegacion con rutas

1. Crear una pagina nueva en `app/nosotros/page.js`.
2. Agregar el link correspondiente en `components/Navbar.js`.
3. Verificar que Next cree la ruta `/nosotros` automaticamente.

## 3. Componente reutilizable

1. Crear un componente `components/SectionTitle.js`.
2. Recibir `eyebrow`, `title` y `description` como props.
3. Reemplazar los encabezados repetidos de las paginas por ese componente.

## 4. Renderizado de listas

1. En `app/productos/page.js`, cambiar `slice(0, 9)` por `slice(0, 6)`.
2. Agregar el puntaje `rt_score` a cada tarjeta.
3. Ordenar las peliculas por fecha de estreno usando `sort`.

## 5. Estado en cliente

1. Revisar por que `FavoriteButton` tiene `'use client'`.
2. Agregar un contador de favoritos visibles en la pagina.
3. Guardar el contador en `localStorage`.

## 6. Build

1. Ejecutar `npm run build`.
2. Leer la salida de la terminal.
3. Identificar que rutas se generaron y cuales usan datos externos.
