import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portafolio";
import News from "./components/News";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">

      <Navbar />

      {/* STICKY HERO WRAPPER */}
      {/* Este div reserva el espacio de 100vh en el flujo, pero el Hero real está Fixed detrás */}
      <div id="home" className="relative h-screen w-full">
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Hero />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL (Cortina) */}
      {/* Este contenido tiene z-index mayor y fondo para cubrir al Hero al subir */}
      <div className="relative z-10 bg-white">

        <About />

        <div className="bg-white"> {/* Wrapper para continuidad de fondo */}
          <div className="h-32"></div>
          <Services />
          <div className="h-32"></div>
          <Portfolio />
          <div className="h-32"></div>
          <News />
          <div className="h-32"></div>
          <Access />
          <Footer />
        </div>

      </div>

    </main>
  );
}
