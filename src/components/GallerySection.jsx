import React from "react";

const galleryData = [
  {
    href: "/gallery#musica",
    imageSrc: "/dest-music.png",
    altText: "Artista Musical",
    title: "Música",
    description: "Composições, trilhas e paisagens sonoras",
  },
  {
    href: "/gallery#ilustracao",
    imageSrc: "/Letícia-Bord.png",
    altText: "Ilustração Digital",
    title: "Ilustração",
    description: "Arte digital, sketches e desenhos tradicionais",
  },
  {
    href: "/gallery#fotografia",
    imageSrc: "/desc-photo.png",
    altText: "Fotografia Profissional",
    title: "Fotografia",
    description: "Retratos, paisagens e momentos únicos",
  },
  {
    href: "/gallery#arte-3d",
    imageSrc: "/desc-3d.jpg",
    altText: "Renderização 3D",
    title: "Arte 3D",
    description: "Modelagem, texturização e renderizações",
  },
  {
    href: "/gallery#sculpture",
    imageSrc: "/desc-sculp.png",
    altText: "Escultura",
    title: "Escultura",
    description: "Obras de modelagem manual, delicadas e precisas",
  },
  {
    href: "/gallery#quadro",
    imageSrc: "/desc-quad.jpeg",
    altText: "Pintura e Quadro",
    title: "Quadro de Pintura",
    description: "Obras em óleo, aquarela e outras técnicas",
  },
];

import { Link } from "react-router-dom";

function GallerySection() {
  return (
    <section className="bg-[#f4f4f9] bg-[radial-gradient(circle_at_top_left,rgba(0,245,218,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,210,35,0.15),transparent_35%)]">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-normal font-bold tracking-[-0.5px] mb-12 bg-clip-text text-transparent bg-[linear-gradient(120deg,#13bfc5_30%,#751e7c_45%,#ea0e51_65%,#ffd223_70%)]">
          Destaques da Categoria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="group block relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
            >
              <img
                src={item.imageSrc}
                alt={item.altText}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full transition-transform duration-400 ease-in-out group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-semibold transform translate-y-5 opacity-0 transition-all duration-400 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-200">
                  {item.title}
                </h3>
                <p className="text-white mt-1 transform translate-y-5 opacity-0 transition-all duration-400 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
