import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Destacados() {
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    fetch('/data/autos.json')
      .then(res => res.json())
      .then(data => {
        const top = data.filter(auto => auto.destacado);
        setDestacados(top);
      });
  }, []);

  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-28 px-6 pb-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.h1
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🚀 Autos Destacados
          </motion.h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {destacados.map((auto, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <img
                  src={auto.image}
                  alt={auto.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                  <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition">
                    {auto.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
