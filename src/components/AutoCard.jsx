import { motion } from 'framer-motion';

export default function AutoCard({ car }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer max-w-sm w-full"
    >
      {/* Imagen del auto */}
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 z-10"
      />

      {/* Capa oscura con botón (encima de la imagen) */}
      <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <button className="bg-white text-black 
        px-4 py-2 rounded-lg font-semibold hover:bg-gold transition">
          Ver más
        </button>
      </div>

      {/* Info del auto */}
      <div className="p-4 text-center z-30 relative bg-white">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="text-gray-500">{car.name}</p>
      </div>
    </motion.div>
  );
}
