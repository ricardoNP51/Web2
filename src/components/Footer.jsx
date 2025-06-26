export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-32">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">🏎️ Mi Auto</h3>
          <p className="text-gray-400">
            Autos de alta gama, diseño, rendimiento y exclusividad al alcance de un clic.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Navegación</h4>
          <ul className="flex flex-col gap-2">
            {[
              { name: "Inicio", href: "/" },
              { name: "Destacados", href: "/destacados" },
              { name: "Catálogo", href: "/catalogo" },
              { name: "Contacto", href: "/contacto" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Contacto</h4>
          <p className="text-gray-400">Correo: contacto@miauto.com</p>
          <p className="text-gray-400">WhatsApp: +591 70000000</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Mi Auto. Todos los derechos reservados.
      </div>
    </footer>
  );
}
