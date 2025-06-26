import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Footer from './components/Footer'; 
import Destacados from './pages/Destacados';
import StorySection from './components/StorySection';


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/destacados" element={<Destacados />} />

        </Routes>
      </main>
      <StorySection />

       <Footer /> {/* 👈 Aquí lo añadimos */}
    </BrowserRouter>
  );
}