export default function ContactSection() {
  return (
    <section className="bg-gray-900 py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
        <p className="mb-8 text-gray-300">¿Tienes una consulta? Escríbenos.</p>

        <form className="grid gap-6 text-left">
          <div>
            <label className="block text-sm font-semibold mb-2">Nombre</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gold"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Correo</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gold"
              placeholder="email@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Mensaje</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gold"
              placeholder="Escribe tu mensaje..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition w-fit mx-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
