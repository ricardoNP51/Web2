import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center" id="inicio">
      
      {/* Fondo con parallax (NO directo sobre el <video>) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <Parallax speed={-20}>
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </Parallax>
      </div>
{/* Imagen flotante de auto */}
<div className="absolute bottom-0 right-0 z-[5] pointer-events-none">
  <Parallax speed={10}>
    <img
      src="/hero-car.png"
      alt="Auto decorativo"
      className="w-64 opacity-10 blur-sm animate-float"
    />
  </Parallax>
</div>
      {/* Capa oscura semitransparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Contenido */}
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiencia. Potencia. Estilo.</h1>
        <p className="text-lg md:text-xl mb-6">Explora los superdeportivos más exclusivos del mundo</p>
        <button className="bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
          Descubrir
        </button>
      </motion.div>
    </section>
  );
}
