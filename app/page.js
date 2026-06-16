const commands = [
  {
    command: 'npm install',
    detail: 'Instala las dependencias declaradas en package.json.',
  },
  {
    command: 'npm run dev',
    detail: 'Levanta el servidor de desarrollo de Next.',
  },
  {
    command: 'npm run build',
    detail: 'Compila la aplicacion para produccion.',
  },
];

const concepts = [
  {
    title: 'npm',
    text: 'Gestiona dependencias, scripts y el package-lock para que todos trabajen con las mismas versiones.',
  },
  {
    title: 'React',
    text: 'Permite dividir la interfaz en componentes reutilizables y pasar datos con props.',
  },
  {
    title: 'Next.js',
    text: 'Agrega rutas por carpeta, renderizado en servidor, metadata y optimizaciones listas para produccion.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div>
          <p className="eyebrow">Comision #88135</p>
          <h1>De JavaScript con DOM a una app con npm, React y Next.js</h1>
          <p className="lead">
            Esta practica toma la clase anterior y la reescribe con componentes,
            rutas y fetch desde Next. La idea es ver que problema resuelve cada
            herramienta y como se conectan entre si.
          </p>
        </div>
        <div className="hero__visual" aria-label="Logo CoderHouse">
          <img src="/assets/img/logo.png" alt="Logo CoderHouse" width="300" height="300" />
        </div>
      </section>

      <section className="section">
        <h2>Comandos base</h2>
        <div className="command-list">
          {commands.map((item) => (
            <div className="command" key={item.command}>
              <code>{item.command}</code>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Conceptos de la clase</h2>
        <div className="concept-grid">
          {concepts.map((concept) => (
            <article className="concept" key={concept.title}>
              <h3>{concept.title}</h3>
              <p>{concept.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
