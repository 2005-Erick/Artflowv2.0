// src/components/MobileMenu.jsx

import React from "react";
import { Link } from "react-router-dom";

function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`
        fixed inset-0 !bg-white transform md:hidden
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="container mx-auto h-full flex flex-col justify-between px-4 py-8">
        {/* Conteúdo Principal do Menu */}
        <div className="flex flex-col items-center justify-center space-y-8 mt-16">
          <Link
            to="/gallery"
            className="text-[#13bfc5] text-2xl font-bold"
            onClick={toggleMenu}
          >
            Explorar
          </Link>
          <Link
            to="/gallery"
            className="text-[#ea0e51] text-2xl font-bold"
            onClick={toggleMenu}
          >
            Artistas
          </Link>
          <Link
            to="/about"
            className="text-[#ffd223] text-2xl font-bold"
            onClick={toggleMenu}
            // onClick={() => {}}
          >
            Sobre
          </Link>

          <div className="flex flex-col items-center space-y-4 pt-10 w-full">
            <Link
              to="/auth"
              className="w-full text-center bg-transparent border-2 border-gray-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="w-full text-center bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors"
              onClick={toggleMenu}
            >
              Cadastre-se
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end text-sm text-gray-500 space-y-2 mb-4">
          <div className="w-full border-t border-gray-300 pt-4"></div>
          <Link to="/legal" className="hover:underline" onClick={toggleMenu}>
            Termos de Serviço
          </Link>
          <Link to="/legal" className="hover:underline" onClick={toggleMenu}>
            Política de Privacidade
          </Link>
          <Link to="/legal" className="hover:underline" onClick={toggleMenu}>
            Diretrizes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
