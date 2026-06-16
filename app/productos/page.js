import { FavoriteButton } from '@/components/FavoriteButton';

const API_URL = 'https://ghibliapi.vercel.app/films/';

async function getMovies() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error('No se pudieron cargar las peliculas');
  }

  return response.json();
}

export const metadata = {
  title: 'Productos - Clase Practica 10',
  description: 'Listado de peliculas consumidas desde una API en Next.js.',
};

export default async function ProductsPage() {
  const movies = await getMovies();
  const featuredMovies = movies.slice(0, 9);

  return (
    <section className="section">
      <p className="eyebrow">Fetch + map</p>
      <h1>Productos - Comision #88135</h1>
      <p className="lead">
        En la clase 09 renderizabamos tarjetas con DOM e innerHTML. En Next los
        datos se piden en el servidor y React transforma el array en componentes.
      </p>

      <div className="movie-grid">
        {featuredMovies.map((movie) => (
          <article className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} width="420" height="315" loading="lazy" />
            <div className="movie-card__body">
              <h2>{movie.title}</h2>
              <p className="movie-card__meta">
                {movie.director} | {movie.release_date}
              </p>
              <p>{movie.description.slice(0, 130)}...</p>
              <FavoriteButton movieId={movie.id} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
