import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // 👈 Importar Link
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Destacados', to: '/destacados' },     // Destacados está en la home
    { name: 'Catálogo', to: '/catalogo' },
    { name: 'Contacto', to: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md px-6 py-4 flex justify-between items-center text-white">
      <div className="navbar-logo">🏎️ Mi Auto</div>

      <nav className="navbar-links hidden md:flex gap-6">
        {navLinks.map((link, i) => (
          <Link key={i} to={link.to} className="hover:text-gold transition">
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hamburger md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gold transition"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
