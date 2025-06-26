import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Video a la izquierda */}
        <motion.video
          className="w-full h-auto rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <source src="/story-video.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </motion.video>

        {/* Storytelling a la derecha */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Pasión Sobre Ruedas
          </h2>
          <p className="text-lg text-gray-300">
            No vendemos autos. Vendemos el rugido del motor, el olor del cuero nuevo y la emoción de conquistar el asfalto.
          </p>
          <p className="text-base text-gray-400">
            Cada modelo es una obra maestra de diseño, velocidad e ingeniería. Una experiencia que redefine lo que significa manejar.
          </p>
          <button className="bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
            Explorar la experiencia
          </button>
        </motion.div>
      </div>
    </section>
  );
}
