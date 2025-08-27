import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slidesData = [
  {
    image: "/vanda-flow.png",
    alt: "Ilustração de uma pessoa com uma caneta digital.",
    title: "Mostre Suas Habilidades",
    subtitle:
      "Do esboço à arte final, seu traço tem espaço aqui para brilhar e inspirar.",
  },
  {
    image: "/photo-flow.png",
    alt: "Câmera fotográfica em um ambiente externo.",
    title: "Capture o Momento",
    subtitle:
      "O mundo através de suas lentes. Compartilhe sua visão, conte histórias com suas fotos.",
  },
  {
    image: "/3d-flow.jpg",
    alt: "Renderização 3D de um personagem.",
    title: "Dê Forma à Imaginação",
    subtitle:
      "Exponha seus projetos 3D mais incríveis e encontre seu público em nossa galeria.",
  },
  {
    image: "/music-flow.png",
    alt: "Mesa de DJ com luzes neon.",
    title: "Esbanje Seus Sons",
    subtitle: "Sua música merece ser ouvida. Deixe sua marca no mundo sonoro.",
  },
];

function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="slides-container absolute inset-0 w-full h-full">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            className={`absolute inset-0 w-full h-full flex items-center justify-center text-white text-center
              bg-cover bg-center
              transition-opacity duration-1000 ease-in-out
              ${
                index === currentSlideIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }
            `}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 max-w-4xl p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed sm:leading-relaxed">
                {slide.subtitle}
              </p>
              <Link
                to="/gallery"
                className="bg-[#ffb23b] text-white px-5 py-2 sm:px-8 sm:py-3 font-semibold rounded-md mt-4 sm:mt-6 inline-block hover:-translate-y-0.5 transition-transform duration-200 ease-in-out text-base sm:text-lg"
              >
                Explore a Galeria
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
