export const metadata = {
  title: 'Contacto - Clase Practica 10',
  description: 'Formulario estatico para practicar JSX y componentes.',
};

export default function ContactPage() {
  return (
    <section className="section">
      <p className="eyebrow">JSX</p>
      <h1>Contacto - Comision #88135</h1>
      <form className="contact-form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="field">
          <label htmlFor="file">Archivo</label>
          <input id="file" name="file" type="file" />
        </div>
        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" />
        </div>
        <button className="button" type="button">
          Enviar
        </button>
      </form>
    </section>
  );
}
