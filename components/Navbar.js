import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link className="brand" href="/">
          <img src="/assets/img/logo.png" alt="" width="44" height="44" />
          <span>Clase 10</span>
        </Link>
        <nav aria-label="Navegacion principal">
          <ul className="navlinks">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
