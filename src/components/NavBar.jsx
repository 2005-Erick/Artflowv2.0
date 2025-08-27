import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu"; // Import MobileMenu

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      scrolled || isMenuOpen
        ? "bg-white shadow-md"
        : "bg-transparent backdrop-blur-md shadow-sm"
    }
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <nav className="relative flex justify-between items-center py-4 ">
          <Link to="/">
            <img
              src="/flowlogo-nv.png"
              alt="ArtFlow Logo"
              className="h-10 w-auto mx-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>

          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-12">
            <li>
              <Link
                to="/gallery"
                className={`
                text-white px-4 py-2 rounded-full
                hover:text-[#02f2da]
                hover:bg-[#13bfc5]/20
                transition-all duration-400 ease-in-out
                ${scrolled || isMenuOpen ? "!text-[#13bfc5]" : ""}
                ${scrolled || isMenuOpen ? "hover:bg-[#13bfc5]/20" : ""}
                ${scrolled || isMenuOpen ? "bg-transparent" : ""}
              `}
              >
                Explorar
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`
                text-white px-4 py-2 rounded-full
                hover:text-[#ea0e51]
                hover:bg-[#ea0e51]/20
                transition-all duration-400 ease-in-out
                ${scrolled || isMenuOpen ? "!text-[#ea0e51]" : ""}
                ${scrolled || isMenuOpen ? "hover:bg-[#ea0e51]/20" : ""}
                ${scrolled || isMenuOpen ? "bg-transparent" : ""}
              `}
              >
                Artistas
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`
                text-white px-4 py-2 rounded-full
                hover:text-[#ffd223]
                hover:bg-[#ffd223]/20
                transition-all duration-400 ease-in-out
                ${scrolled || isMenuOpen ? "!text-[#ffd223]" : ""}
                ${scrolled || isMenuOpen ? "hover:bg-[#ffd223]/20" : ""}
                ${scrolled || isMenuOpen ? "bg-transparent" : ""}
              `}
                // onClick={() => {}}
              >
                Sobre
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/auth"
              className={`bg-transparent text-white border border-white px-4 py-2 rounded-md font-semibold hover:bg-gray-300/30 hover:-translate-y-0.5 transition-all duration-400 ease-in-out 
                ${
                  scrolled || isMenuOpen
                    ? "!text-black border !border-black"
                    : ""
                }
              `}
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="bg-[#13bfc5] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#15dae0] hover:-translate-y-0.5 transition-all duration-400 ease-in-out"
            >
              Cadastre-se
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden z-50"
            aria-label="Abrir menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Navbar;
