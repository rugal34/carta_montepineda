import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brown-500 text-yellow-100 py-10 px-6 relative">
      <img
        src="/assets/coffee-bean.PNG"
        alt="Icono grano de café"
        className="absolute top-4 left-4 w-8 h-8 opacity-50 mb-4"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Columna 1: Nombre y eslogan */}
        <div>
          <h2 className="text-3xl font-bold mb-2">MONTEPINEDA CAFE</h2>
          <p className="text-lg">Fresco como la montaña</p>
        </div>
        {/* Columna 2: Contacto y dirección */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contacto</h3>
          <div className="flex items-center gap-2 mb-1">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/573148751355"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              314 8751355‬
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-icons text-green-500"></span>
            <span>Dirección: Calle 6 # 11-52 centro</span>
          </div>
        </div>
        {/* Columna 3: Redes y horarios */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.instagram.com/montepinedacafe?igsh=MWIwY2dybzJ2NG1sNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 rounded-full p-2 hover:bg-brown-500 transition"
            >
              <FaInstagram className="text-yellow-100 text-2xl" />
            </a>
          </div>
          <h4 className="font-semibold">Horarios</h4>
          <p className="text-sm">Martes a jueves: 4 pm - 10 pm</p>
          <p className="text-sm">Viernes a sábado: 4 pm - 11 pm</p>
        </div>
      </div>
      <div className="border-t border-brown-700 mt-8 pt-4 text-center text-yellow-100 text-sm">
        © 2024 MontePineda Café. Todos los derechos reservados.
      </div>
    </footer>
  );
} 