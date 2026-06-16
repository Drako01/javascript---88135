'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    const shouldUseDark = savedTheme === 'dark';
    document.body.classList.toggle('dark', shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function handleClick() {
    const nextValue = !isDark;
    document.body.classList.toggle('dark', nextValue);
    window.localStorage.setItem(STORAGE_KEY, nextValue ? 'dark' : 'light');
    setIsDark(nextValue);
  }

  return (
    <button className="theme-toggle" type="button" onClick={handleClick}>
      {isDark ? 'Modo claro' : 'Modo oscuro'}
    </button>
  );
}
