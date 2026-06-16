'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'favorite-movies';

export function FavoriteButton({ movieId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  function handleClick() {
    const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
    const nextFavorites = favorites.includes(movieId)
      ? favorites.filter((favoriteId) => favoriteId !== movieId)
      : [...favorites, movieId];

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavorites));
    setIsFavorite(nextFavorites.includes(movieId));
  }

  return (
    <button
      className={`favorite-button${isFavorite ? ' is-active' : ''}`}
      type="button"
      onClick={handleClick}
      aria-pressed={isFavorite}
    >
      {isFavorite ? 'Favorito agregado' : 'Agregar favorito'}
    </button>
  );
}
