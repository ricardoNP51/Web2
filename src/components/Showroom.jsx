import { useEffect, useState } from 'react';
import AutoCard from './AutoCard';

export default function Showroom() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/data/autos.json')
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error('Error cargando autos:', err));
  }, []);

  return (
    <section className="my-24 px-4">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Showroom</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {cars.map((car, index) => (
            <AutoCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
