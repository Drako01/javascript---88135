# Clase practica 10 - npm, React y Next.js

## Objetivo

La clase 09 usaba HTML, CSS, JavaScript del navegador, DOM manual, `fetch`,
`localStorage` y librerias cargadas por CDN. En esta clase hacemos una version
parecida con Next.js para introducir tres ideas nuevas:

1. **npm** para instalar dependencias y ejecutar scripts.
2. **React** para construir la interfaz con componentes.
3. **Next.js** para trabajar con rutas, renderizado en servidor y estructura de
   aplicacion.

## npm

`npm` es el gestor de paquetes que viene con Node.js. En un proyecto moderno se
usa para instalar librerias, guardar versiones y definir comandos.

Archivos importantes:

- `package.json`: describe el proyecto, dependencias y scripts.
- `package-lock.json`: guarda las versiones exactas instaladas.
- `node_modules/`: carpeta local donde npm descarga las dependencias.

Comandos de esta practica:

```bash
npm install
npm run dev
npm run build
npm start
```

## React

React permite crear interfaces a partir de componentes. Un componente es una
funcion que devuelve JSX.

```jsx
export function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}
```

Conceptos clave:

- **JSX**: sintaxis parecida a HTML dentro de JavaScript.
- **Props**: datos que un componente recibe desde afuera.
- **Estado**: datos que cambian durante la interaccion del usuario.
- **Renderizado de listas**: transformar arrays en componentes con `map`.

Ejemplo tomado de la pagina de productos:

```jsx
{featuredMovies.map((movie) => (
  <article className="movie-card" key={movie.id}>
    <h2>{movie.title}</h2>
  </article>
))}
```

## Next.js

Next.js es un framework construido sobre React. Aporta estructura de proyecto,
rutas automaticas, renderizado en servidor, metadata y optimizaciones.

En esta practica se usa la carpeta `app/`:

```txt
app/
  layout.js
  page.js
  productos/page.js
  contacto/page.js
components/
  Navbar.js
  ThemeToggle.js
  FavoriteButton.js
```

Reglas principales:

- `app/page.js` crea la ruta `/`.
- `app/productos/page.js` crea la ruta `/productos`.
- `app/contacto/page.js` crea la ruta `/contacto`.
- `app/layout.js` envuelve todas las paginas.

## Server Components y Client Components

En Next, los componentes son de servidor por defecto. Eso permite pedir datos
antes de enviar el HTML al navegador.

```js
async function getMovies() {
  const response = await fetch('https://ghibliapi.vercel.app/films/');
  return response.json();
}
```

Cuando un componente necesita eventos, estado, `localStorage` o `window`, debe
ser un componente cliente con `'use client'`.

```jsx
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

En esta practica:

- `ThemeToggle` usa `localStorage` y modifica el tema.
- `FavoriteButton` guarda favoritos en `localStorage`.
- `Productos` pide datos en servidor y renderiza la lista con `map`.

## Comparacion con la clase 09

| Clase 09 | Clase 10 |
| --- | --- |
| HTML separado por archivo | Rutas en `app/` |
| DOM manual con `createElement` | Componentes React |
| `innerHTML` para tarjetas | JSX + `map` |
| Librerias por CDN | Dependencias por npm |
| `script` global | Modulos import/export |
| Fetch en navegador | Fetch desde componente de servidor |

## Flujo recomendado para explicar

1. Mostrar `package.json` y los scripts.
2. Ejecutar `npm install`.
3. Levantar `npm run dev`.
4. Recorrer `app/layout.js` para entender la estructura comun.
5. Mostrar `app/page.js` como pagina estatica.
6. Mostrar `app/productos/page.js` como pagina con datos externos.
7. Mostrar `ThemeToggle` y `FavoriteButton` para explicar `'use client'`.
8. Ejecutar `npm run build` para ver como Next prepara produccion.

## Autor

[Alejandro Di Stefano](https://github.com/Drako01)
