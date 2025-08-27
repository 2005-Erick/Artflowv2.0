import React from "react";
import { Link } from "react-router-dom";

// NOTA: Para os ícones funcionarem, certifique-se de que a biblioteca Font Awesome
// está sendo importada no seu arquivo public/index.html.

function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-16 text-gray-600 text-center md:text-left">
      {/* Solução para a borda superior com gradiente */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#13bfc5] via-[#751e7c] to-[#ffd223]"></div>

      <div className="container mx-auto px-4">
        {/* Usamos flexbox para centralizar em mobile e grid para desktop */}
        <div className="flex flex-col items-center md:grid md:grid-cols-4 md:gap-10 pb-10">
          {/* Coluna 1: ArtFlow (Sempre visível) */}
          <div className="footer-column mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-5 text-[#13bfc5]">
              ArtFlow
            </h4>
            <p className="leading-relaxed max-w-sm mx-auto md:mx-0">
              Uma plataforma para artistas visuais, músicos e criadores de todas
              as áreas compartilharem sua paixão e talento com o mundo.
            </p>
          </div>

          {/* Coluna 2: Navegação (Oculta em mobile) */}
          <div className="footer-column hidden md:block">
            <h4 className="text-xl font-semibold mb-5 text-[#751e7c]">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/auth"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/auth"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Legal (Oculta em mobile) */}
          <div className="footer-column hidden md:block">
            <h4 className="text-xl font-semibold mb-5 text-[#ea0e51]">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/auth"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#2b1e67] transition- hover:underline"
                >
                  Diretrizes da Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Siga-nos (Sempre visível) */}
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-5 text-[#ffd223]">
              Siga-nos
            </h4>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="#"
                title="Instagram"
                aria-label="Instagram"
                className="text-2xl hover:text-[#ea0e51] hover:-translate-y-1 transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                title="Twitter"
                aria-label="Twitter"
                className="text-2xl hover:text-black hover:-translate-y-1 transition-all"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                title="Pinterest"
                aria-label="Pinterest"
                className="text-2xl hover:text-[#e6221f] hover:-translate-y-1 transition-all"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-gray-100 text-center py-5 border-t border-gray-200 text-sm text-gray-500">
        <p>&copy; 2025 ArtFlow. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
