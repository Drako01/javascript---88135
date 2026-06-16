import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'Clase Practica 10 - Next.js',
  description: 'Practica de npm, React y Next.js basada en la clase 09.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="main">{children}</main>
          <footer className="footer">Clase Practica 10 - CoderHouse</footer>
        </div>
      </body>
    </html>
  );
}
