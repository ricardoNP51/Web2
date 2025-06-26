import { useEffect, useState } from "react";
import PageTransition from '../components/PageTransition';


export default function Catalogo() {
  const [cars, setCars] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    fetch("/data/autos.json")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error al cargar autos:", err));
  }, []);

  const marcas = ["Todos", ...new Set(cars.map((auto) => auto.name.split(" ")[0]))];

  const autosFiltrados = filtro === "Todos"
    ? cars
    : cars.filter((auto) => auto.name.startsWith(filtro));

  return (
        <PageTransition>

    <section className="min-h-screen pt-28 px-4 pb-20">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Catálogo de Autos</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {marcas.map((marca, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full border ${
                filtro === marca
                  ? "bg-yellow-400 text-black font-semibold"
                  : "bg-gray-800 text-white hover:bg-yellow-400 hover:text-black"
              } transition`}
              onClick={() => setFiltro(marca)}
            >
              {marca}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {autosFiltrados.map((auto) => (
            <div
              key={auto.id}
              className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition w-[280px]"
            >
              <img
                src={auto.image}
                alt={auto.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{auto.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </PageTransition>

  );
}
